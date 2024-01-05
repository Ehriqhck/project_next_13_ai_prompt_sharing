export const GameActions = {
  getData () {
    return [
      //seat_general
      {
        actionmapName: 'seat_general',
        id: 'v_eject',
        name: 'Eject',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Press'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_emergency_exit',
        name: 'Emergency Exit Seat',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Press'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_operator_mode_cycle_back',
        name: 'Cycle Operator Mode Back',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Press'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_operator_mode_cycle_forward',
        name: 'Cycle Operator Mode Forward',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Press'
      },

      {
        actionmapName: 'seat_general',
        id: 'v_toggle_mining_mode',
        name: 'Toggle Mining Mode',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_toggle_quantum_mode',
        name: 'Toggle Quantum Mode',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_toggle_salvage_mode',
        name: 'Toggle Salvage Mode',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_toggle_scan_mode',
        name: 'Toggle Scan Mode',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'seat_general',
        id: 'v_view_look_behind',
        name: 'Look Behind',
        category: 'Vehicles / Seats & Operator Modes',
        inputType: 'Press'
      },

      // Spaceship_general
      {
        actionmapName: 'spaceship_general',
        id: 'v_close_all_doors',
        name: 'Close All Doors',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_cooler_throttle_down',
        name: 'Decrease Cooler Rate',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_cooler_throttle_up',
        name: 'Increase Cooler Rate',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_flightready',
        name: 'Flight & Systems Ready',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_lock_all_doors',
        name: 'Lock All Doors',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_toggle_all_doorlocks',
        name: 'Lock All Doors',
        category: 'Lock & Unlock Doors',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_toggle_all_doorlocks',
        name: 'Unlock All Doors',
        category: 'Unlock All Doors',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_open_all_doors',
        name: 'Open All Doors',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_toggle_all_doors',
        name: 'Open & Close All Doors',
        category: 'Vehicles / Cockpit',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_lock_all_ports',
        name: 'Lock All Ports',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_unlock_all_ports',
        name: 'Unlock All Ports',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_toggle_all_portlocks',
        name: 'Port Lock Toggle All',
        category: 'Vehicles / Cockpit',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_general',
        id: 'v_self_destruct',
        name: 'Self Destruct',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      // spaceship_view / Vehicles - View
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_cycle_fwd',
        name: 'Cycle Camera View',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_zoom_in',
        name: 'Zoom In (Third Person View)',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_zoom_out',
        name: 'Zoom Out (Third Person View)',
        category: 'Vehicles / Cockpit',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_dynamic_zoom_abs',
        name: 'Dynamic Zoom In & Out (Absolute)',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_dynamic_zoom_abs_toggle',
        name: 'Dynamic Zoom Toggle (Absolute)',
        category: 'Vehicles / View',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_dynamic_zoom_rel',
        name: 'Dynamic Zoom In & Out (Relative)',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_dynamic_zoom_rel_in',
        name: 'Dynamic Zoom In (Relative)',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_dynamic_zoom_rel_out',
        name: 'Dynamic Zoom Out (Relative)',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_freelook_mode',
        name: 'Freelook',
        category: 'Vehicles / View',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_mode',
        name: 'Cycle Camera Orbit Mode',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_pitch',
        name: 'Look/Pitch Up & Down',
        category: 'Vehicles / View',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_pitch_down',
        name: 'Look/Pitch Down',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_pitch_up',
        name: 'Look/Pitch Up',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_yaw',
        name: 'Look/Yaw Left & Right',
        category: 'Vehicles / View',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_yaw_left',
        name: 'Look/Yaw Left',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_view',
        id: 'v_view_yaw_right',
        name: 'Look/Yaw Right',
        category: 'Vehicles / View',
        inputType: 'Press'
      },
      // spaceship_movement / Flight - Movement
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_abs_rel_swap',
        name: 'Throttle - Swap Relative & Absolute',
        category: 'Flight / Movement',
        inputType: 'press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_back_abs',
        name: 'Throttle - Backwards (Absolute)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_back_abs_rel',
        name: 'Throttle - Backwards (Relative)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_back_abs_rel',
        name: 'Throttle - Backwards (Relative & Absolute)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_down',
        name: 'Strafe Down (Absolute)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_forward_abs',
        name: 'Throttle - Forward (Absolute)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_forward_abs_rel',
        name: 'Throttle - Forward (Absolute & Relative)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_forward_rel',
        name: 'Throttle - Forward (Relative)',
        category: 'Flight / Movement',
        inputType: 'pressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_lateral',
        name: 'Strafe Left & Right (Absolute)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_left',
        name: 'Strafe Left (Absolute)',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_longitudinal_abs',
        name: 'Strafe Forward & Backward (Absolute)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_longitudinal_abs_rel',
        name: 'Strafe Forward & Backward (Absolute & Relative)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_longitudinal_rel',
        name: 'Strafe Forward & Backward (Relative)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_longitudinal_invert',
        name: 'Strafe Forward & Back Invert',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_reset_rel_long',
        name: 'Throttle - Remove Trim (Long)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_reset_rel_short',
        name: 'Throttle - Remove Trim (Short)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_set_rel_from_abs_long',
        name: 'Throttle - Set Trim (Long)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_set_rel_from_abs_short',
        name: 'Throttle - Set Trim (Short)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_right',
        name: 'Strafe Right (Absolute)',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_strafe_vertical',
        name: 'Strafe Up & Down (Absolute)',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_target_match_vel',
        name: 'Match Target Velocity',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_speed_range_abs',
        name: 'Speed Limiter (Absolute)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_speed_range_down',
        name: 'Speed Limiter Decrease',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_speed_range_up',
        name: 'Speed Limiter Increase',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_speed_range_rel',
        name: 'Speed Limiter (Relative)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_accel_range_abs',
        name: 'Acceleration Limiter Up/Down (Absolute)',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_accel_range_up',
        name: 'Acceleration Limiter Increase',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_accel_range_down',
        name: 'Acceleration Limiter Decrease',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_accel_range_rel',
        name: 'Acceleration Limiter Up/Down (Relative)',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_afterburner',
        name: 'Afterburner',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_atc_loading_area_request',
        name: 'ATC Loading Request',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_atc_request',
        name: 'ATC Request Landing',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_deploy_landing_system',
        name: 'Landing System (Deploy)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_retract_landing_system',
        name: 'Landing System (Retract)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_toggle_landing_system',
        name: 'Landing System (Toggle)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_toggle_vtol',
        name: 'Toggle VTOL',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_toggle_yaw_roll_swap',
        name: 'Swap Yaw & Roll (Toggle)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_transform_cycle',
        name: 'Cycle Configuration',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_transform_deploy',
        name: 'Expand Configuration',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_transform_retract',
        name: 'Retract Configuration',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_engage_jump',
        name: 'Jump Drive - Engage Jump',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_toggle_jump_request',
        name: 'Jump Drive - Request Jump',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_esp_hold',
        name: 'IFCS ESP Hold',
        category: 'Flight / Movement',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_speed_limiter_reset_scm',
        name: 'Speed Limiter - Reset to SCM Speed',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_toggle_cruise_control',
        name: 'Cruise Control',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_toggle_esp',
        name: 'ESP Toggle On & Off (Press)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_toggle_gforce_safety',
        name: 'G-Force Safety On/Off (Hold/Toggle)',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_toggle_speed_limiter',
        name: 'Speed Limiter On/Off (Hold/Toggle)',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_ifcs_toggle_vector_decoupling',
        name: 'Decoupled Mode (Hold/Toggle)',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_lock_rotation',
        name: 'Lock Pitch & Yaw Movement (Hold/Toggle)',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_master_mode_cycle',
        name: 'Cycle Master Mode',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_pitch_down',
        name: 'Pitch Down',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_pitch_up',
        name: 'Pitch Up',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_pitch',
        name: 'Pitch',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_yaw',
        name: 'Yaw',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_yaw_left',
        name: 'Yaw Left',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_yaw_right',
        name: 'Yaw Right',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_roll',
        name: 'Roll',
        category: 'Flight / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_roll_left',
        name: 'Roll Left',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_roll_right',
        name: 'Roll Right',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_movement',
        id: 'v_space_brake',
        name: 'Spacebrake',
        category: 'Flight / Movement',
        inputType: 'PressHold'
      },
      // spaceship_quantum / Flight - Quantum Travel
      {
        actionmapName: 'spaceship_quantum',
        id: 'v_toggle_qdrive_engagement',
        name: 'Engage Quantum Drive (Hold)',
        category: 'Flight / Movement',
        inputType: 'Hold'
      },

      // spaceship_docking / Flight - Docking
      {
        actionmapName: 'spaceship_docking',
        id: 'v_toggle_docking_mode',
        name: 'Toggle Docking Mode',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_docking',
        id: 'v_invoke_docking',
        name: 'Invoke Docking',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_docking',
        id: 'v_dock_toggle_view',
        name: 'Toggle Docking View',
        category: 'Flight / Movement',
        inputType: 'Press'
      },
      // spaceship_docking / Flight - Docking
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_enter_remote_turret_1',
        name: 'Enter Remote Turret 1',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_enter_remote_turret_2',
        name: 'Enter Remote Turret 2',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_enter_remote_turret_3',
        name: 'Enter Remote Turret 3',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_look_ahead_enable',
        name: 'Enable / Disable Look Ahead',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_look_ahead_start_target_tracking',
        name: 'Enable / Disable Target Padlock (Toggle, Hold)',
        category: 'Flight / Docking',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_lock_selected',
        name: 'Lock Selected Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_unlock_selected',
        name: 'Unlock Selected Target',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_pin_selected',
        name: 'Pin Selected Target (Press)',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_pin_selected_hold',
        name: 'Pin Selected Target (Hold)',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_remove_all_pins',
        name: 'Remove All Pinned Targets',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_lock_index_1',
        name: 'Pin Index 1 - Lock / Unlock Pinned Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_lock_index_2',
        name: 'Pin Index 2 - Lock / Unlock Pinned Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_lock_index_3',
        name: 'Pin Index 3 - Lock / Unlock Pinned Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_pin_index_1',
        name: 'Pin Index 1 - Pin / Unpin Selected Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_pin_index_1_hold',
        name: 'Pin Index 1 - Pin / Unpin Selected Target (Hold)',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_pin_index_2',
        name: 'Pin Index 2 - Pin / Unpin Selected Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_pin_index_2_hold',
        name: 'Pin Index 2 - Pin / Unpin Selected Target (Hold)',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_pin_index_1',
        name: 'Pin Index 3 - Pin / Unpin Selected Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_toggle_pin_index_1_hold',
        name: 'Pin Index 3 - Pin / Unpin Selected Target (Hold)',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_tracking_auto_zoom',
        name: 'Auto Zoom on Selected Target On / Off (Toggle, Hold)',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_unpin_selected',
        name: 'Unpin Selected Target',
        category: 'Flight / Docking',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting',
        id: 'v_target_unpin_selected_hold',
        name: 'Unpin Selected Target (Hold)',
        category: 'Flight / Docking',
        inputType: 'Hold'
      },
      // spaceship_targeting_advanced / Vehicles - Target Cycling
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_all_back',
        name: 'Cycle Lock - All - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_all_fwd',
        name: 'Cycle Lock - All - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_all_reset',
        name: 'Cycle Lock - All - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_attacker_back',
        name: 'Cycle Lock - Attacker - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_attacker_fwd',
        name: 'Cycle Lock - Attacker - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_attacker_reset',
        name: 'Cycle Lock - Attacker - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_friendly_back',
        name: 'Cycle Lock - Friendly - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_friendly_fwd',
        name: 'Cycle Lock - Friendly - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_friendly_reset',
        name: 'Cycle Lock - Friendly - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_hostile_back',
        name: 'Cycle Lock - Hostiles - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_hostile_fwd',
        name: 'Cycle Lock - Hostiles - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_hostile_reset',
        name: 'Cycle Lock - Hostiles - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_in_view_back',
        name: 'Cycle Lock - In View - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_in_view_fwd',
        name: 'Cycle Lock - In View - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_in_view_reset',
        name: 'Cycle Lock - In View - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_pinned_back',
        name: 'Cycle Lock - Pinned - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_pinned_fwd',
        name: 'Cycle Lock - Pinned - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_pinned_reset',
        name: 'Cycle Lock - Pinned - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_subitem_back',
        name: 'Cycle Lock - Sub-Target - Back',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_subitem_fwd',
        name: 'Cycle Lock - Sub-Target - Forward',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_targeting_advanced',
        id: 'v_target_cycle_subitem_reset',
        name: 'Cycle Lock - Sub-Target - Reset',
        category: 'Vehicles / Target Cycling',
        inputType: 'Press'
      },
      // spaceship_target_hailing / Flight - Target Hailing
      {
        actionmapName: 'spaceship_target_hailing',
        id: 'v_target_hail',
        name: 'Hail Target',
        category: 'Flight / Target Hailing',
        inputType: 'Press'
      },
      // spaceship_radar / Vehicles - Radar
      {
        actionmapName: 'spaceship_radar',
        id: 'v_invoke_ping',
        name: 'Activate Ping (Hold & Release)',
        category: 'Vehicles / Radar',
        inputType: 'Hold'
      },
      // spaceship_scanning / Vehicles - Scanning
      {
        actionmapName: 'spaceship_scanning',
        id: 'v_scanning_trigger_scan',
        name: 'Activate Scanning',
        category: 'Vehicles / Scanning',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_scanning',
        id: 'v_inc_scan_focus_level',
        name: 'Increase Scanning Angle',
        category: 'Vehicles / Scanning',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_scanning',
        id: 'v_dec_scan_focus_level',
        name: 'Decrease Scanning Angle',
        category: 'Vehicles / Scanning',
        inputType: 'Press'
      },
      // spaceship_mining / Vehicles - Mining
      {
        actionmapName: 'spaceship_mining',
        id: 'v_toggle_mining_laser_fire',
        name: 'Fire Mining Laser (Toggle)',
        category: 'Vehicles / Mining',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_toggle_mining_laser_type',
        name: 'Switch Mining Laser (Toggle)',
        category: 'Vehicles / Mining',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_mining_throttle',
        name: 'Increase / Decrease Mining Laser Power',
        category: 'Vehicles / Mining',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_increase_mining_throttle',
        name: 'Increase Mining Laser Power',
        category: 'Vehicles / Mining',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_decrease_mining_throttle',
        name: 'Decrease Mining Laser Power',
        category: 'Vehicles / Mining',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_jettison_volatile_cargo',
        name: 'Jettison Cargo',
        category: 'Vehicles / Mining',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_mining_use_consumable1',
        name: 'Activate Mining Module (Slot 1)',
        category: 'Vehicles / Mining',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_mining_use_consumable2',
        name: 'Activate Mining Module (Slot 2)',
        category: 'Vehicles / Mining',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_mining',
        id: 'v_mining_use_consumable3',
        name: 'Activate Mining Module (Slot 3)',
        category: 'Vehicles / Mining',
        inputType: 'Press'
      },
      // spaceship_salvage / Vehicles - Salvage
      {
        actionmapName: 'spaceship_salvage',
        id: 'tractor_beam_vehicle_increase_distance',
        name: 'Tractor Beam Vehicle - Increase Distance',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'tractor_beam_vehicle_decrease_distance',
        name: 'Tractor Beam Vehicle - Decrease Distance',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_beam_spacing_abs',
        name: 'Salvage Beam Spacing (Absolute)',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_beam_spacing_rel',
        name: 'Salvage Beam Spacing (Relative)',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_cycle_modifiers_focused',
        name: 'Cycle Focused Salvage Modifiers',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_cycle_modifiers_left',
        name: 'Cycle Left Salvage Modifiers',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_cycle_modifiers_right',
        name: 'Cycle Right Salvage Modifiers',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_cycle_modifiers_structural',
        name: 'Cycle Structural Salvage Modes',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_increase_beam_spacing',
        name: 'Increase Beam Spacing',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_decrease_beam_spacing',
        name: 'Decrease Beam Spacing',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_focus_all_heads',
        name: 'Focus All Salvage Heads',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_focus_left',
        name: 'Focus Left Salvage Heads',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_focus_right',
        name: 'Focus Right Salvage Heads',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_focus_disintegrate',
        name: 'Focus Disintergration Tool',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_focus_fracture',
        name: 'Focus Fracture Tool',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_increase_beam_spacing',
        name: 'Focus Fracture Tool',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_up__left',
        name: 'Nudge Left Salvage Tool Up',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_down__left',
        name: 'Nudge Left Salvage Tool Down',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_down__right',
        name: 'Nudge Left Salvage Tool Down',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_left__left',
        name: 'Nudge Left Salvage Tool Left',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_left__right',
        name: 'Nudge Left Salvage Tool Right',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_right__left',
        name: 'Nudge Right Salvage Tool Left',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_right__right',
        name: 'Nudge Right Salvage Tool Right',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_nudge_up__right',
        name: 'Nudge Right Salvage Tool Up',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_reset_gimbal',
        name: 'Reset Salvage Gimbal',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_beam_spacing_axis',
        name: 'Salvage Beam Axis (Toggle)',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_fire_disintegrate',
        name: 'Toggle Fire Disintegrate',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_fire_focused',
        name: 'Toggle Fire Focused',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_fire_fracture',
        name: 'Toggle Fire Fracture',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_fire_left',
        name: 'Toggle Fire Left',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_fire_left',
        name: 'Toggle Fire Right',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_salvage',
        id: 'v_salvage_toggle_gimbal_mode',
        name: 'Salvage Mode Gimbal (Toggle)',
        category: 'Vehicles / Salvage',
        inputType: 'Press'
      },
      // turret_movement / Turret Movement
      {
        actionmapName: 'turret_movement',
        id: 'turret_gyromode',
        name: 'Turret Gryo Stablization (Toggle)',
        category: 'Turret Movement',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_pitch',
        name: 'Turret Pitch Up & Down',
        category: 'Turret Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_pitch',
        name: 'Turret Pitch Up',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_pitch_up',
        name: 'Turret Pitch Up',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_pitch_down',
        name: 'Turret Pitch Down',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_yaw',
        name: 'Turret Yaw',
        category: 'Turret Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_yaw_left',
        name: 'Turret Yaw Left',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_yaw_right',
        name: 'Turret Yaw Right',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_remote_exit',
        name: 'Exit Remote Turret',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_remote_zoom_in',
        name: 'Zoom In (Remote Turret)',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_remote_zoom_out',
        name: 'Zoom Out (Remote Turret)',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_remote_zoom_toggle',
        name: 'Zoom Toggle (Remote Turret)',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_movement',
        id: 'turret_toggle_mouse_mode',
        name: 'Toggle Turret Mouse Movement (VJoy <-> FPS)',
        category: 'Turret Movement',
        inputType: 'Press'
      },
      // turret_advanced / Turret Advanced
      {
        actionmapName: 'turret_advanced',
        id: 'turret_change_firemode',
        name: 'Cycle Fire Mode (Staggerd <-> Combined)',
        category: 'Turret Advanced',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_change_position',
        name: 'Change Turret Position',
        category: 'Turret Advanced',
        inputType: 'Press'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_esp_hold',
        name: 'Turret ESP - Enable Temporarily (Hold)',
        category: 'Turret Advanced',
        inputType: 'Hold'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_esp_toggle',
        name: 'Turret ESP Toggle On / Off',
        category: 'Turret Advanced',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_instant_zoom',
        name: 'Turret Instant Zoom',
        category: 'Turret Advanced',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_limiter_abs',
        name: 'Turret - Speed Limiter (Absolute)',
        category: 'Turret Advanced',
        inputType: 'Axis'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_limiter_rel',
        name: 'Turret - Speed Limiter (Relative)',
        category: 'Turret Advanced',
        inputType: 'Axis'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_limiter_rel_decrease',
        name: 'Turret - Decrease Speed Limiter (Relative)',
        category: 'Turret Advanced',
        inputType: 'Axis'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_limiter_rel_increase',
        name: 'Turret - Increase Speed Limiter (Relative)',
        category: 'Turret Advanced',
        inputType: 'Axis'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_limiter_toggle',
        name: 'Turret - Toggle Speed Limiter On / Off (Hold/Toggle)',
        category: 'Turret Advanced',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'turret_advanced',
        id: 'turret_recenter',
        name: 'Recenter Turret (Hold)',
        category: 'Turret Advanced',
        inputType: 'Hold'
      },
      // spaceship_weapons / Vehicles - Weapons
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_attack_all',
        name: 'Fire Weapon All',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_attack_group1',
        name: 'Fire Weapon Group 1',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_attack_group2',
        name: 'Fire Weapon Group 2',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_change_firemode',
        name: 'Cycle Fire Mode (Staggered <-> Combined)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_convergence_distance_abs',
        name: 'Manual Convergence Distance (Absolute)',
        category: 'Vehicles / Weapons',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_convergence_distance_rel',
        name: 'Manual Convergence Distance (Relative)',
        category: 'Vehicles / Weapons',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_convergence_distance_rel_decrease',
        name: 'Manual Convergence Distance - Decrease (Relative)',
        category: 'Vehicles / Weapons',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_convergence_distance_rel_increase',
        name: 'Manual Convergence Distance - Increase (Relative)',
        category: 'Vehicles / Weapons',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_convergence_distance_set_default',
        name: 'Manual Convergence Distance - Reset (Relative)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_cycle_all',
        name: 'Cycle Gimbal Assist / Standard Gimbal / Gimbal Lock Modes',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_cycle_fixed_auto',
        name: 'Cycle Fixed / Auto Gimbal Modes',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_set_auto',
        name: 'Set Auto Gimbal Mode (Short Press)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_set_auto_long',
        name: 'Set Auto Gimbal Mode (Long Press)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_set_fixed',
        name: 'Set Fixed Gimbal Mode (Short Press)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_set_fixed_long',
        name: 'Set Fixed Gimbal Mode (Long Press)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_set_manual',
        name: 'Set Manual Gimbal Mode (Short Press)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_gimbal_mode_set_manual_long',
        name: 'Set Manual Gimbal Mode (Long Press)',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_manual_gimbal_cycle_source',
        name: 'Manual Gimble Mode - Swap VJoy / Look Direction (Toggle, Hold)',
        category: 'Vehicles / Weapons',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_manual_gimbal_lock_vector',
        name: 'Manual Gimble Mode - Lock Aim Vector',
        category: 'Vehicles / Weapons',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_combination_type_set_combined_all',
        name: 'PIP Combination Type: Set Average of All',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_combination_type_set_combined_weapon_group',
        name: 'PIP Combination Type: Set One Pip Per Weapon Type',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_combination_type_set_single',
        name: 'PIP Combination Type: Set One Pip Per Weapon',
        category: 'Vehicles / Weapons',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_combination_type_toggle',
        name: 'PIP Combination Type: Toggle',
        category: 'Vehicles / Weapons',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_toggle_lead_lag',
        name: 'Toggle Lead / Lag PIPs',
        category: 'Vehicles / Weapons',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_set_lag',
        name: 'Set Lag PIPs',
        category: 'Vehicles / Weapons',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_pip_set_lead',
        name: 'Set Lead PIPs',
        category: 'Vehicles / Weapons',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spaceship_weapons',
        id: 'v_weapon_suppress_aim_assists_hold',
        name: 'Suppress Aim Assist (Hold)',
        category: 'Vehicles / Weapons',
        inputType: 'Hold'
      },
      // spaceship_missiles / Vehicles - Missiles
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_bombing_hud_range_increase',
        name: 'Bombs - Increase HUD Range',
        category: 'Vehicles / Missiles',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_bombing_hud_range_decrease',
        name: 'Bombs - Decrease HUD Range',
        category: 'Vehicles / Missiles',
        inputType: 'Hold'
      }
    ]
  },

  getCustomersSmall () {
    return Promise.resolve(this.getData().slice(0, 10))
  },

  getCustomersMedium () {
    return Promise.resolve(this.getData().slice(0, 50))
  },

  getCustomersLarge () {
    return Promise.resolve(this.getData().slice(0, 200))
  },

  getCustomersXLarge () {
    return Promise.resolve(this.getData())
  },

  getCustomers (params) {
    const queryParams = params
      ? Object.keys(params)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&')
      : ''

    return fetch(
      'https://www.primefaces.org/data/customers?' + queryParams
    ).then(res => res.json())
  }
}
