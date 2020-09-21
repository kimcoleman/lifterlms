<?php
/**
 * Display a Setup Wizard
 *
 * @package LifterLMS/Admin/Classes
 *
 * @since 3.0.0
 * @version 4.4.4
 */

defined( 'ABSPATH' ) || exit;

/**
 * Display a Setup Wizard class
 *
 * @since 3.0.0
 * @since 3.30.3 Fixed spelling error.
 * @since 3.35.0 Sanitize input data.
 * @since 3.37.14 Ensure redirect to the imported course when a course is imported at setup completion.
 * @since 4.4.4 Method `LLMS_Admin_Setup_Wizard::scripts()` & `LLMS_Admin_Setup_Wizard::output_step_html()` are deprecated with no replacements.
 */
class LLMS_Admin_Setup_Wizard {

	/**
	 * Instance of WP_Error
	 *
	 * @var WP_Error
	 */
	private $error;

	/**
	 * Holds WP_Post ID of the course generated by the importer at the conclusion of setup.
	 *
	 * @var int
	 */
	private $generated_course_id;

	/**
	 * Constructor
	 *
	 * @since 3.0.0
	 * @since [verison] Remove output of inline scripts.
	 *
	 * @return void
	 */
	public function __construct() {

		/**
		 * Whether or not the LifterLMS Setup Wizard is enabled.
		 *
		 * This filter may be used to entirely disable the setup wizard.
		 *
		 * @since 3.0.0
		 *
		 * @param boolean $enabled Whether or not the wizard is enabled.
		 */
		if ( apply_filters( 'llms_enable_setup_wizard', true ) ) {

			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
			add_action( 'admin_menu', array( $this, 'admin_menu' ) );
			add_action( 'admin_init', array( $this, 'save' ) );

		}

	}

	/**
	 * Register wizard setup page
	 *
	 * @since 3.0.0
	 * @since 4.4.4 Added dashboard page title.
	 *
	 * @return void
	 */
	public function admin_menu() {

		/**
		 * Filter the WP User capability required to access and run the setup wizard.
		 *
		 * @since 3.0.0
		 *
		 * @param string $cap Required user capability. Default value is `install_plugins`.
		 */
		$cap = apply_filters( 'llms_setup_wizard_access', 'install_plugins' );

		add_dashboard_page( __( 'LifterLMS Setup Wizard', 'lifterlms' ), '', $cap, 'llms-setup', array( $this, 'output' ) );

		update_option( 'lifterlms_first_time_setup', 'yes' );

	}

	/**
	 * Enqueue static assets for the setup wizard screens
	 *
	 * @since 3.0.0
	 * @since 3.17.8 Unknown.
	 * @since 4.4.4 Use `LLMS_Assets` for asset registration and queuing.
	 *
	 * @return void
	 */
	public function enqueue() {
		llms()->assets->enqueue_style( 'llms-admin-setup' );
	}

	/**
	 * Allow the Sample Content installed during the final step to be published rather than drafted
	 *
	 * @since  3.3.0
	 *
	 * @param string $status Post status.
	 * @return string
	 */
	public function generator_course_status( $status ) {
		return 'publish';
	}

	/**
	 * Retrieve the current step and default to the intro
	 *
	 * @since 3.0.0
	 * @since 3.35.0 Sanitize input data.
	 *
	 * @return string
	 */
	public function get_current_step() {
		return empty( $_GET['step'] ) ? 'intro' : llms_filter_input( INPUT_GET, 'step', FILTER_SANITIZE_STRING );
	}

	/**
	 * Get slug if next step
	 *
	 * @since  3.0.0
	 *
	 * @param string $step Step to use as current.
	 * @return string|false
	 */
	public function get_next_step( $step = '' ) {
		if ( ! $step ) {
			$step = $this->get_current_step();
		}
		$steps = $this->get_steps();
		$keys  = array_keys( $steps );
		$i     = array_search( $step, $keys );
		if ( false === $i ) {
			return false;
		} elseif ( $i++ >= count( $keys ) - 1 ) {
			return false;
		} else {
			return $keys[ $i++ ];
		}
	}

	/**
	 * Get slug if prev step
	 *
	 * @since 3.0.0
	 *
	 * @param string $step Step to use as current.
	 * @return string|false
	 */
	public function get_prev_step( $step = '' ) {
		if ( ! $step ) {
			$step = $this->get_current_step();
		}
		$steps = $this->get_steps();
		$keys  = array_keys( $steps );
		$i     = array_search( $step, $keys );
		if ( false === $i ) {
			return false;
		} elseif ( $i - 1 < 0 ) {
			return false;
		} else {
			return $keys[ $i - 1 ];
		}
	}

	/**
	 * Get the text to display on the "save" buttons
	 *
	 * @since 3.0.0
	 * @since 3.3.0 Unknown.
	 *
	 * @param string $step Step to get text for.
	 * @return string The translated text.
	 */
	private function get_save_text( $step = '' ) {
		if ( 'coupon' === $step ) {
			return __( 'Allow', 'lifterlms' );
		} elseif ( 'finish' === $step ) {
			return __( 'Install a Sample Course', 'lifterlms' );
		} else {
			return __( 'Save & Continue', 'lifterlms' );
		}
	}

	/**
	 * Get the text to display on the "save" buttons
	 *
	 * @since 3.0.0
	 *
	 * @param string $step Step to get text for.
	 * @return string Translated text.
	 */
	private function get_skip_text( $step = '' ) {
		if ( 'coupon' === $step ) {
			return __( 'No thanks', 'lifterlms' );
		} else {
			return __( 'Skip this step', 'lifterlms' );
		}
	}

	/**
	 * Get the URL to a step
	 *
	 * @since 3.0.0
	 *
	 * @param string $step Step slug.
	 * @return string
	 */
	private function get_step_url( $step ) {
		return add_query_arg(
			array(
				'page' => 'llms-setup',
				'step' => $step,
			),
			admin_url()
		);
	}

	/**
	 * Get an array of step slugs => titles
	 *
	 * @since 3.0.0
	 *
	 * @return array
	 */
	public function get_steps() {
		return array(
			'intro'    => __( 'Welcome!', 'lifterlms' ),
			'pages'    => __( 'Page Setup', 'lifterlms' ),
			'payments' => __( 'Payments', 'lifterlms' ),
			'coupon'   => __( 'Coupon', 'lifterlms' ),
			'finish'   => __( 'Finish!', 'lifterlms' ),
		);
	}

	/**
	 * Output the HTML content of the setup page
	 *
	 * @since 3.0.0
	 * @since 3.16.14 Unknown.
	 *
	 * @return void
	 */
	public function output() {

		$step_html = '';
		$steps     = $this->get_steps();
		$current   = $this->get_current_step();
		$prev      = $this->get_prev_step();
		$next      = $this->get_next_step();

		if ( in_array( $current, array_keys( $this->get_steps(), true ) ) ) {

			ob_start();
			include LLMS_PLUGIN_DIR . 'includes/admin/views/setup-wizard/step-' . $current . '.php';
			$step_html = ob_get_clean();

		}

		include LLMS_PLUGIN_DIR . 'includes/admin/views/setup-wizard/main.php';

	}

	/**
	 * Handle saving data during setup
	 *
	 * @since 3.0.0
	 * @since 3.3.0 Unknown.
	 * @since 3.35.0 Sanitize input data; load sample data from `sample-data` directory.
	 * @since 3.37.14 Ensure redirect to proper course when a course is imported at the end of setup.
	 *
	 * @return void
	 */
	public function save() {

		if ( ! isset( $_POST['llms_setup_nonce'] ) || ! llms_verify_nonce( 'llms_setup_nonce', 'llms_setup_save' ) ) {
			return;
		}

		if ( ! current_user_can( 'manage_lifterlms' ) ) {
			return;
		}

		switch ( llms_filter_input( INPUT_POST, 'llms_setup_save', FILTER_SANITIZE_STRING ) ) {

			case 'coupon':
				update_option( 'llms_allow_tracking', 'yes' );
				$req = LLMS_Tracker::send_data( true );

				if ( is_wp_error( $req ) ) {
					$r = false;
				} elseif ( isset( $req['success'] ) ) {
					$r = $req['success'];

					if ( ! $req['success'] ) {

						$this->error = new WP_Error( 'error', $r['message'] );
						return;

					}
				}

				break;

			case 'finish':
				add_filter( 'llms_generator_course_status', array( $this, 'generator_course_status' ) );
				add_action( 'llms_generator_new_course', array( $this, 'watch_course_generation' ) );
				$json = file_get_contents( LLMS_PLUGIN_DIR . 'sample-data/sample-course.json' );
				$gen  = new LLMS_Generator( $json );
				$gen->set_generator();
				$gen->generate();
				if ( $gen->is_error() ) {
					wp_die( $gen->get_results() );
				} else {
					if ( $this->generated_course_id ) {
						wp_safe_redirect( get_edit_post_link( $this->generated_course_id, 'not-display' ) );
						exit;
					}
				}
				break;

			case 'pages':
				$r = LLMS_Install::create_pages();
				break;

			case 'payments':
				$country = isset( $_POST['country'] ) ? llms_filter_input( INPUT_POST, 'country', FILTER_SANITIZE_STRING ) : get_lifterlms_country();
				update_option( 'lifterlms_country', $country );

				$currency = isset( $_POST['currency'] ) ? llms_filter_input( INPUT_POST, 'currency', FILTER_SANITIZE_STRING ) : get_lifterlms_currency();
				update_option( 'lifterlms_currency', $currency );

				$manual = isset( $_POST['manual_payments'] ) ? llms_filter_input( INPUT_POST, 'manual_payments', FILTER_SANITIZE_STRING ) : 'no';
				update_option( 'llms_gateway_manual_enabled', $manual );

				$r = true;

				break;

			default:
				$r = false;

				break;
		}

		if ( false === $r ) {

			$this->error = new WP_Error( 'error', __( 'There was an error saving your data, please try again.', 'lifterlms' ) );
			return;

		} else {

			wp_safe_redirect( $this->get_step_url( $this->get_next_step() ) );
			exit;

		}

	}

	/**
	 * Callback function to store imported course information
	 *
	 * Uses this to handle redirect after import and generation is completed.
	 *
	 * @since 3.37.14
	 *
	 * @param LLMS_Course $course Course object.
	 * @return void
	 */
	public function watch_course_generation( $course ) {

		if ( $course && is_a( $course, 'LLMS_Course' ) ) {
			$this->generated_course_id = $course->get( 'id' );
		}

	}

	/**
	 * Outputs the HTML "body" for the requested step
	 *
	 * @since 3.0.0
	 * @since 3.30.3 Fixed spelling error.
	 * @deprecated 4.4.4
	 *
	 * @param string $step Step slug.
	 * @return void
	 */
	public function output_step_html( $step ) {
		llms_deprecated_function( 'LLMS_Admin_Setup_Wizard::output_step_html()', '4.4.4' );
	}

	/**
	 * Quick and dirty JS "file"
	 *
	 * @since 3.0.0
	 * @deprecated 4.4.4
	 *
	 * @return void
	 */
	public function scripts() {
		llms_deprecated_function( 'LLMS_Admin_Setup_Wizard::scripts()', '4.4.4' );
	}

}

return new LLMS_Admin_Setup_Wizard();
