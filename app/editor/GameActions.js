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
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_bombing_hud_range_reset',
        name: 'Bombs - Reset HUD Range',
        category: 'Vehicles / Missiles',
        inputType: 'Hold'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_bombing_toggle_desired_impact_point',
        name: 'Bombs - Toggle Desired Impact Point (Tap)',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_bombing_toggle_desired_impact_point_hold',
        name: 'Bombs - Toggle Desired Impact Point (Hold)',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_cycle_missile_fwd',
        name: 'Cycle Next Missile',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_cycle_missile_back',
        name: 'Cycle Previous Missile',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_decrease_max_missiles',
        name: 'Decrease Number of Armed Missiles',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_increase_max_missiles',
        name: 'Increase Number of Armed Missiles',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_reset_max_missiles',
        name: 'Reset Number of Armed Missiles',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_launch_missile',
        name: 'Launch Missile (Tap)',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_toggle_launch_missile',
        name: 'Launch Missile (Hold)',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_launch_missile_cinematic',
        name: 'Enable Cinematic Camera (Tap)',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_missiles',
        id: 'v_weapon_launch_missile_cinematic_hold',
        name: 'Enable Cinematic Camera (Hold)',
        category: 'Vehicles / Missiles',
        inputType: 'Press'
      },
      // spaceship_defensive / Vehicles - Shields and Countermeasures
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_raise_level_back',
        name: 'Shield Raise Level Back',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_raise_level_down',
        name: 'Shield Raise Level Bottom',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_raise_level_forward',
        name: 'Shield Raise Level Forward',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_raise_level_left',
        name: 'Shield Raise Level Left',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_raise_level_right',
        name: 'Shield Raise Level Left',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_raise_level_up',
        name: 'Shield Raise Level Top',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_reset_level',
        name: 'Shield Reset Levels',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_shield_reset_level',
        name: 'Shield Reset Levels',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_weapon_countermeasure_decoy_burst_decrease',
        name: 'Decoy - Decrease Burst Size (Tap)',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_weapon_countermeasure_decoy_burst_increase',
        name: 'Decoy - Increase Burst Size (Tap)',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_weapon_countermeasure_decoy_launch',
        name: 'Decoy - Launch Burst (Tap), Set & Launch Burst (Hold)',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_weapon_countermeasure_decoy_launch_panic',
        name: 'Decoy - Panic Launch (Tap)',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_weapon_countermeasure_noise_launch',
        name: 'Noise - Deploy (Tap)',
        category: 'Vehicles / Shields and Countermeasures',
        inputType: 'Press'
      },
      // vehicle_capacitor_assignment / Power Triangle Assignment
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_engine_combined_decrease_min',
        name: 'Engines - Decrease Power (Tap) / Set to Minimum (Hold)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_engine_combined_increase_max',
        name: 'Engines - Increase Power (Tap) / Set to Maximum (Hold)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_engine_decrease',
        name: 'Engines - Decrease Power (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_engine_increase',
        name: 'Engines - Increase Power (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_engine_max',
        name: 'Engines - Set to Maximum (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_engine_min',
        name: 'Engines - Set to Minimum (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_reset',
        name: 'Reset Assignment',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_combined_decrease_min',
        name: 'Reset Assignment',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },

      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_combined_decrease_min',
        name: 'Shields - Decrease Power (Tap) / Set to Minimum (Hold)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_combined_increase_max',
        name: 'Shields - Increase Power (Tap) / Set to Maximum (Hold)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_decrease',
        name: 'Shields - Decrease Power (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_increase',
        name: 'Shields - Increase Power (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_max',
        name: 'Shields - Set to Maximum (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_shield_min',
        name: 'Shields - Set to Minimum (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_reset',
        name: 'Shields Assignment',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },

      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_weapon_combined_decrease_min',
        name: 'Weapons - Decrease Power (Tap) / Set to Minimum (Hold)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_weapon_combined_increase_max',
        name: 'Weapons - Increase Power (Tap) / Set to Maximum (Hold)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_weapon_decrease',
        name: 'Weapons - Decrease Power (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_weapon_increase',
        name: 'Weapons - Increase Power (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_weapon_max',
        name: 'Weapons - Set to Maximum (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_capacitor_assignment_weapon_min',
        name: 'Weapons - Set to Minimum (Tap)',
        category: 'Vehicles / Power Triangle Assignment',
        inputType: 'Press'
      },
      // spaceship_power / Flight - Power
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_off',
        name: 'Set Power Off',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_on',
        name: 'Set Power On',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_toggle_shields',
        name: 'Toggle Power - Shields',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_shields_off',
        name: 'Set Shields Power Off',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_shields_on',
        name: 'Set Shields Power On',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_toggle_thrusters',
        name: 'Toggle Power - Thrusters',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_thrusters_off',
        name: 'Set Thrusters Power Off',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_thrusters_on',
        name: 'Set Thrusters Power On',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_toggle_weapons',
        name: 'Toggle Power - Weapons',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_weapons_off',
        name: 'Set Weapons Power Off',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_set_weapons_on',
        name: 'Set Weapons Power On',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_throttle_down',
        name: 'Decrease Throttle ',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_throttle_min',
        name: 'Decrease Throttle To Minimum ',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_throttle_up',
        name: 'Increase Throttle',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_defensive',
        id: 'v_power_toggle',
        name: 'Toggle Power - All',
        category: 'Flight / Power',
        inputType: 'Press'
      },
      // spaceship_hud / Flight - HUD
      {
        actionmapName: 'spaceship_hud',
        id: 'v_cycle_pitch_ladder_mode',
        name: 'Cycle Pitch Ladder Mode',
        category: 'Flight / HUD',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_hud',
        id: 'v_hud_open_scoreboard',
        name: 'Open Scoreboard',
        category: 'Flight / HUD',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_hud',
        id: 'v_starmap',
        name: 'Open Map (Starmap)',
        category: 'Flight / HUD',
        inputType: 'Press'
      },
      {
        actionmapName: 'spaceship_hud',
        id: 'visor_wipe',
        name: 'Wipe Helmet Visor',
        category: 'Flight / HUD',
        inputType: 'Press'
      },
      // lights_controller / Lights
      {
        actionmapName: 'lights_controller',
        id: 'v_lights',
        name: 'Headlights (Toggle)',
        category: 'Lights',
        inputType: 'Press'
      },
      // Stopwatch / stopwatch
      {
        actionmapName: 'stopwatch',
        id: 'stopwatch_reset',
        name: 'Reset (Long Press)',
        category: 'Stopwatch',
        inputType: 'Hold'
      },
      {
        actionmapName: 'stopwatch',
        id: 'player',
        name: 'Start / Pause (Short Press)',
        category: 'Stopwatch',
        inputType: 'Hold'
      },
      // player / On Foot - All
      {
        actionmapName: 'player',
        id: 'ammoRepool',
        name: 'Repool Ammo',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'attack1',
        name: 'Firearm - Attack',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'consume',
        name: '?????',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'customize',
        name: 'Customize Weapon',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'drop',
        name: 'Drop Item',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'fixed_speed_decrement',
        name: 'Default Movement Speed Decrease',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'fixed_speed_increment',
        name: 'Default Movement Speed Increase',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'force_respawn',
        name: 'Force Respawn (EVA / On Foot)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'gp_crouch',
        name: 'Crouch',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'jump',
        name: 'Jump',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'gp_movex',
        name: 'Move Forward',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'gp_movey',
        name: 'Move Left / Right',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'gp_rotatepitch',
        name: 'Look - Pitch',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'gp_rotateyaw',
        name: 'Look - Yaw',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'holster',
        name: 'Holster Weapon',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'inspect',
        name: 'Inspect Item',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'leanright',
        name: 'Lean Left',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'leanleft',
        name: 'Lean Right',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'ledgegrab',
        name: 'Grab Ledge',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'melee_AttackSyringeStab',
        name: 'Medical Pen - Inject Other',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'melee_AttackHeavyLeft',
        name: 'Melee - Attack Heavy Left',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'melee_AttackLightLeft',
        name: 'Melee - Attack Left',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'melee_AttackHeavyRight',
        name: 'Melee - Attack Heavy Right',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'melee_AttackLightRight',
        name: 'Melee - Attack Right',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'melee_block',
        name: 'Melee - Block',
        category: 'On Foot / All',
        inputType: 'Hold'
      },
      {
        actionmapName: 'player',
        id: 'moveback',
        name: 'Move Backwards',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'moveforward',
        name: 'Move Forwards',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'moveleft',
        name: 'Move Left',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'moveright',
        name: 'Move Right',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'nextweapon',
        name: 'Next Weapon',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'prevweapon',
        name: 'Previous Weapon',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'sprint',
        name: 'Sprint',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'prone',
        name: 'Prone',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'reload',
        name: 'Reload',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'reloadSecondary',
        name: 'Reload Secondary',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'selectMeleeWeapon',
        name: 'Select Melee',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'weapon_melee',
        name: 'Melee - Attack (Ranged Weapon & Takedowns)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'selectUnarmedCombat',
        name: 'Select Unarmed Combat',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'selectgadget',
        name: 'Select Gadget',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'selectpistol',
        name: 'Select Sidearm',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'selectprimary',
        name: 'Select Primary Weapon',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'selectsecondary',
        name: 'Select Secondary Weapon',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'ship_recall',
        name: 'Ship Recall',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'stabilize',
        name: 'Hold Breath (ADS)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'stabilize',
        name: 'Hold Breath (ADS)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'free_thirdperson_camera',
        name: 'Free View Camera (Hold)',
        category: 'On Foot / All',
        inputType: 'Hold'
      },
      {
        actionmapName: 'player',
        id: 'thirdperson',
        name: 'Third Person View (Toggle)',
        category: 'On Foot / All',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'player',
        id: 'throw_overhand',
        name: 'Throw - Overhand & Two-Handed',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'throw_underhand',
        name: 'Throw - Underarm',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'toggleAttachHelmet',
        name: 'Helmet',
        category: 'On Foot / All',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'player',
        id: 'toggleHelmetState',
        name: '?toggleHelmetState',
        category: 'On Foot / All',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'player',
        id: 'toggleHetoggle_flashlightlmetState',
        name: 'Flashlight (Toggle)',
        category: 'On Foot / All',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'player',
        id: 'v_starmap',
        name: 'Map / Starmap',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'visor_wipe',
        name: 'Wipe Helmet Visor',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'walk',
        name: 'Walk',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'weapon_auxiliary_action',
        name: 'FPS Underbarrel Attachment Action',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'weapon_change_firemode',
        name: 'Change Fire Mode',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'weapon_zeroing_decrease',
        name: 'Weapon Zeroing Decrease',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'weapon_zeroing_increase',
        name: 'Weapon Zeroing Increase / Auto',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'zoom',
        name: 'Aim Down Sight',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'zoom_in',
        name: 'Zoom In (ADS)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'zoom_out',
        name: 'Zoom Out (ADS)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'player',
        id: 'zoom_in_out',
        name: 'Zoom In / Out (ADS)',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      // SUBCHILD: prone
      {
        actionmapName: 'prone',
        id: 'prone_rollleft',
        name: 'Roll Left (While Prone)',
        category: 'On Foot / All',
        inputType: 'Axis'
      },
      {
        actionmapName: 'prone',
        id: 'prone_rollright',
        name: 'Roll Right (While Prone)',
        category: 'On Foot / All',
        inputType: 'Axis'
      }, // SUBCHILD: tractor_beam
      {
        actionmapName: 'tractor_beam',
        id: 'tractor_beam_decrease_distance',
        name: 'Tractor Beam - Decrease Distance',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'tractor_beam',
        id: 'tractor_beam_increase_distance',
        name: 'Tractor Beam - Increase Distance',
        category: 'On Foot / All',
        inputType: 'Press'
      },
      // zero_gravity_eva / EVA - ALL
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_boost',
        name: 'EVA Boost',
        category: 'EVA / All',
        inputType: 'Hold'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_brake',
        name: 'EVA Brake',
        category: 'EVA / All',
        inputType: 'Hold'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_roll',
        name: 'EVA Roll Left / Right',
        category: 'EVA / All',
        inputType: 'Axis'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_roll_left',
        name: 'EVA Roll Left',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_roll_right',
        name: 'EVA Roll Right',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_back',
        name: 'EVA Strafe Back',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_vertical',
        name: 'EVA Strafe Up / Down',
        category: 'EVA / All',
        inputType: 'Axis'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_up',
        name: 'EVA Strafe Up',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_down',
        name: 'EVA Strafe Down',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_forward',
        name: 'EVA Strafe Forward',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_lateral',
        name: 'EVA Strafe Left / Right',
        category: 'EVA / All',
        inputType: 'Axis'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_left',
        name: 'EVA Strafe Left',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_strafe_right',
        name: 'EVA Strafe Right',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_toggle_headlook_mode',
        name: 'Freelook (Hold)',
        category: 'EVA / All',
        inputType: 'Hold'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_view_pitch',
        name: 'EVA View Up / Down',
        category: 'EVA / All',
        inputType: 'Axis'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_view_pitch_down',
        name: 'EVA View Down',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_view_pitch_up',
        name: 'EVA View Up',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_view_yaw',
        name: 'EVA View Left / Right',
        category: 'EVA / All',
        inputType: 'Axis'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_view_yaw_left',
        name: 'EVA View Left',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_eva',
        id: 'eva_view_yaw_right',
        name: 'EVA View Right',
        category: 'EVA / All',
        inputType: 'Press'
      },
      // zero_gravity_traversal / Zero G Traversal
      {
        actionmapName: 'zero_gravity_traversal',
        id: 'zgt_detach',
        name: 'EVA Detatch',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_traversal',
        id: 'zgt_launch',
        name: 'EVA Launch',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_traversal',
        id: 'zgt_roll_left',
        name: 'EVA Roll Left',
        category: 'EVA / All',
        inputType: 'Press'
      },
      {
        actionmapName: 'zero_gravity_traversal',
        id: 'zgt_roll_right',
        name: 'EVA Roll Left',
        category: 'EVA / All',
        inputType: 'Press'
      },
      // vehicle_general / Ground Vehicle - General
      {
        actionmapName: 'vehicle_general',
        id: 'v_attack_all',
        name: 'Fire Weapon All',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_attack_group1',
        name: 'Fire Weapon Group 1',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_attack_group2',
        name: 'Fire Weapon Group 2',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_flightready',
        name: 'Flight / Systems Ready',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_horn',
        name: 'Horn',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_lock_all_doors',
        name: 'Lock All Doors',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_lock_all_ports',
        name: 'Lock All Ports',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_close_all_doors',
        name: 'Close All Doors',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_open_all_doors',
        name: 'Open All Doors',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_starmap',
        name: 'Open Map / Starmap',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_toggle_all_doorlocks',
        name: 'Lock / Unlock Doors (Toggle)',
        category: 'Ground Vehicle / General',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_toggle_all_doors',
        name: 'Open / Close Doors (Toggle)',
        category: 'Ground Vehicle / General',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_toggle_all_portlocks',
        name: 'Lock / Unlock Ports (Toggle)',
        category: 'Ground Vehicle / General',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_unlock_all_doors',
        name: 'Unlock All Doors',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_unlock_all_ports',
        name: 'Unlock All Ports',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_cycle_fwd',
        name: 'Cycle Camera View',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_freelook_mode',
        name: 'Freelock (Hold)',
        category: 'Ground Vehicle / General',
        inputType: 'Hold'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_pitch',
        name: 'Look Up / Down',
        category: 'Ground Vehicle / General',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_yaw',
        name: 'Look Left / Right',
        category: 'Ground Vehicle / General',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_zoom_in',
        name: 'Zoom In (Third Person View)',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_zoom_out',
        name: 'Zoom Out (Third Person View)',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'visor_wipe',
        name: 'Wipe Helmet Visor',
        category: 'Ground Vehicle / General',
        inputType: 'Press'
      },

      // vehicle_driver / Ground Vehicle - Movement
      {
        actionmapName: 'vehicle_general',
        id: 'v_boost',
        name: 'Boost',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_brake',
        name: 'Brake',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_lock_rotation',
        name: 'Lock Pitch / Yaw Movement (Toggle / Hold)',
        category: 'Ground Vehicle / Movement',
        inputType: 'PressHold'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_mgv_switch_brake_on_idle',
        name: '?v_mgv_switch_brake_on_idle',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_move',
        name: 'Drive Forward / Backward',
        category: 'Ground Vehicle / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_move_back',
        name: 'Drive Backward',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_move_forward',
        name: 'Drive Forward',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_yaw',
        name: 'Yaw Left / Right (AXIS / HOTAS)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_yaw_left',
        name: 'Yaw Left (AXIS / HOTAS)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_yaw_right',
        name: 'Yaw Right (AXIS / HOTAS)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_pitch',
        name: 'Pitch Up / Down (AXIS / HOTAS)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_pitch_down',
        name: 'Pitch Down',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_pitch_up',
        name: 'Pitch Up',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_dynamic_zoom_abs',
        name: 'Dynmaic Zoom In & Out (Absolute)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_dynamic_zoom_abs_toggle',
        name: 'Dynmaic Zoom Toggle (Absolute)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_dynamic_zoom_rel',
        name: 'Dynmaic Zoom In & Out (Relative)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Axis'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_dynamic_zoom_rel_in',
        name: 'Dynmaic Zoom In (Relative)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      {
        actionmapName: 'vehicle_general',
        id: 'v_view_dynamic_zoom_rel_in',
        name: 'Dynmaic Zoom Out (Relative)',
        category: 'Ground Vehicle / Movement',
        inputType: 'Press'
      },
      // spectator / Electronic Access - Spectator
      {
        actionmapName: 'spectator',
        id: 'spectate_gen_nextmode',
        name: 'Spectator Camera Mode (Next)',
        category: 'Electronic Access / Spectator',
        inputType: 'Press'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_gen_prevmode',
        name: 'Spectator Camera Mode (Previous)',
        category: 'Electronic Access / Spectator',
        inputType: 'Press'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_next_target',
        name: 'Spectator Camera Target (Next)',
        category: 'Electronic Access / Spectator',
        inputType: 'Press'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_prev_target',
        name: 'Spectator Camera Target (Previous)',
        category: 'Electronic Access / Spectator',
        inputType: 'Press'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_rotatepitch',
        name: 'Spectator Camera Rotate Pitch',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_rotatepitch_mouse',
        name: 'Spectator Camera Rotate Pitch (Mouse)',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_rotateyaw',
        name: 'Spectator Camera Rotate Yaw',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_rotateyaw_mouse',
        name: 'Spectator Camera Rotate Yaw (Mouse)',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_toggle_hud',
        name: 'Spectator HUD (Toggle)',
        category: 'Electronic Access / Spectator',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_toggle_lock_target',
        name: 'Spectator Camera Lock Target',
        category: 'Electronic Access / Spectator',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_zoom',
        name: 'Spectator Zoom In / Out',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_zoom_in',
        name: 'Spectator Zoom In',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      {
        actionmapName: 'spectator',
        id: 'spectate_zoom_out',
        name: 'Spectator Zoom Out',
        category: 'Electronic Access / Spectator',
        inputType: 'Axis'
      },
      //default / Social - General
      {
        actionmapName: 'default',
        id: 'toggle_contact',
        name: 'CommLink APp (Toggle)',
        category: 'Social / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'default',
        id: 'toggle_chat',
        name: 'Chat Window (Toggle)',
        category: 'Social / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'default',
        id: 'focus_on_chat_textinput',
        name: 'Chat Window Focus',
        category: 'Social / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'default',
        id: 'pl_exit',
        name: 'Exit Seat',
        category: 'Social / General',
        inputType: 'Press'
      },
      {
        actionmapName: 'default',
        id: 'respawn',
        name: 'Respawn',
        category: 'Social / General',
        inputType: 'Press'
      },
      //player_emotes / Social - Emotes
      {
        actionmapName: 'player_emotes',
        id: 'emote_agree',
        name: 'Emote Agree',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_angry',
        name: 'Emote Angry',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_atease',
        name: 'Emote At Ease',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_attention',
        name: 'Emote Atttention',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_blah',
        name: 'Emote Blah',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_bored',
        name: 'Emote Bored',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_bow',
        name: 'Emote Bow',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_burp',
        name: 'Emote Burp',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cheer',
        name: 'Emote Cheer',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_chicken',
        name: 'Emote Chicken',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_clap',
        name: 'Emote Clap',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_come',
        name: 'Emote Come',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cry',
        name: 'Emote Cry',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cs_forward',
        name: 'Emote Forward',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cs_left',
        name: 'Emote Left',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cs_yes',
        name: 'Emote Yes',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cs_no',
        name: 'Emote No',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cs_right',
        name: 'Emote Right',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_cs_stop',
        name: 'Emote Stop',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_dance',
        name: 'Emote Dance',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_disagree',
        name: 'Emote Disagree',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_flex',
        name: 'Emote Failure',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_failure',
        name: 'Emote Flex',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_failure',
        name: 'Emote Flex',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_flirt',
        name: 'Emote Flirt',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_gasp',
        name: 'Emote Gasp',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_gloat',
        name: 'Emote Gloat',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_greet',
        name: 'Emote Greet',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_laugh',
        name: 'Emote Laugh',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_launch',
        name: 'Emote Launch',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_point',
        name: 'Emote Point',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_rude',
        name: 'Emote Rude',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_salute',
        name: 'Emote Salute',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_sit',
        name: 'Emote Sit',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_sit',
        name: 'Emote Sit',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_sit',
        name: 'Emote Sit',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_sleep',
        name: 'Emote Sleep',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_smell',
        name: 'Emote Smell',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_taunt',
        name: 'Emote Taunt',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_threaten',
        name: 'Emote Threaten',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_wait',
        name: 'Emote Wait',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_wave',
        name: 'Emote Wave',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_emotes',
        id: 'emote_whistle',
        name: 'Emote Whistle',
        category: 'Social / Emotes',
        inputType: 'Press'
      },
      // player_input_optical_tracking / VOIP, FOIP, and Headtracking
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'foip_cyclechannel',
        name: 'Cycle Through Audio Channels',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'foip_pushtotalk',
        name: 'VOIP Push To Talk',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'foip_pushtotalk_proximity',
        name: 'VOIP Push To Talk (Proximity Only)',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'foip_recalibrate',
        name: 'FOIP Recalibrate',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'foip_viewownplayer',
        name: 'FOIP Selfie Camera',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'headtrack_camera_enabled',
        name: 'Enable Head Tracking',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'headtrack_enabled',
        name: 'Enable / Disable Head Tracking for Third Person Camera (Toggle)',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Toggle'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'headtrack_hold',
        name: 'Head Tracking (Hold)',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Hold'
      },
      {
        actionmapName: 'player_input_optical_tracking',
        id: 'headtrack_recenter_device',
        name: 'Recenter Head Tracking Device (Except TrackIR)',
        category: 'VOIP, FOIP, and Headtracking',
        inputType: 'Press'
      },
      // player_choice / Quick Keys, Intraction, & Inner Thought
      {
        actionmapName: 'player_choice',
        id: 'pc_camera_orbit',
        name: '?pc_camera_orbit',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_focus',
        name: 'Focus',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_interaction_mode',
        name: 'Interaction Mode',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_interaction_select',
        name: 'Activate Inner Thought',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_personal_back',
        name: 'Exit',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_personal_thought',
        name: 'Personal Inner Thought (PIT)',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_emotes',
        name: 'Pit Category - Emotes',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_flight_systems',
        name: 'Pit Category - Flight Systems',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_inventory',
        name: 'Pit Category - Inventory',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_item_actions',
        name: 'Pit Category - Item Actions',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_item_drop',
        name: 'Drop Item',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_miningmode_actions',
        name: 'Pit Category - Mining Mode Actions',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_mobiglas_actions',
        name: 'Pit Category - Mobiglass Actions',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_player_actions',
        name: 'Pit Category - Player Actions',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_remote_turrets',
        name: 'Pit Category - Remote Turret',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_ship_systems',
        name: 'Pit Category - Ship Systems',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_vehicle_actions',
        name: 'Pit Category - Vehicle Actions',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_weapon_selection',
        name: 'Pit Category - Weapon Selection',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_pit_weapons_systems',
        name: 'Pit Category - Weapon Systems',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_qs_consumables',
        name: 'Consumable Select Radial Menu',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_qs_flight_mode',
        name: 'Flight Mode Select Radial Menu',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_qs_grenades',
        name: 'Throwables Select Radial Menu',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_qs_weapons_pistol',
        name: 'Sidearm Weapons Select Radial Menu',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_qs_weapons_secondary',
        name: 'Secondary Weapons Select Radial Menu',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_qs_weapons_primary',
        name: 'Primary Weapons Select Radial Menu',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_screen_focus_down',
        name: 'MFD Down',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_screen_focus_up',
        name: 'MFD Up',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_screen_focus_left',
        name: 'MFD Left',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_screen_focus_right',
        name: 'MFD Right',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_select',
        name: 'Activate Inner Thought (pc_select)',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_zoom_in',
        name: 'Interaction Mode Zoom In',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      {
        actionmapName: 'player_choice',
        id: 'pc_zoom_out',
        name: 'Interaction Mode Zoom Out',
        category: 'Quick Keys, Intraction, & Inner Thought',
        inputType: 'Press'
      },
      // view_director_mode / Camera - Advanced Camera Controls
      {
        actionmapName: 'view_director_mode',
        id: 'view_fov_in',
        name: 'Increase FoV',
        category: 'Camera / Advanced Camera Controls',
        inputType: 'Press'
      },
      {
        actionmapName: 'view_director_mode',
        id: 'view_fov_out',
        name: 'Decrease FoV',
        category: 'Camera / Advanced Camera Controls',
        inputType: 'Press'
      },
      {
        actionmapName: 'view_director_mode',
        id: 'view_fstop_in',
        name: 'Increase DoF / fstop',
        category: 'Camera / Advanced Camera Controls',
        inputType: 'Press'
      },
      {
        actionmapName: 'view_director_mode',
        id: 'view_fstop_out',
        name: 'Decrease DoF / fstop',
        category: 'Camera / Advanced Camera Controls',
        inputType: 'Press'
      },
      {
        actionmapName: 'view_director_mode',
        id: 'view_restore_defaults',
        name: 'Reset Current View',
        category: 'Camera / Advanced Camera Controls',
        inputType: 'Press'
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
