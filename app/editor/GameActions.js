export const GameActions = {
  getTreeTableNodesData () {
    return [
      //seat_general
      {
        key: 'seat_general',
        data: {
          name: 'Vehicles / Seats & Operator Modes'
        },
        children: [
          {
            key: 'v_eject',
            data: {
              name: 'Eject',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_emergency_exit',
            data: {
              name: 'Emergency Exit Seat',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_operator_mode_cycle_back',
            data: {
              name: 'Cycle Operator Mode Back',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_operator_mode_cycle_forward',
            data: {
              name: 'Cycle Operator Mode Forward',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_mining_mode',
            data: {
              name: 'Toggle Mining Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_quantum_mode',
            data: {
              name: 'Toggle Quantum Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_salvage_mode',
            data: {
              name: 'Toggle Salvage Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_scan_mode',
            data: {
              name: 'Toggle Scan Mode',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_view_look_behind',
            data: {
              name: 'Look Behind',
              category: 'Vehicles / Seats & Operator Modes',
              actionmapName: 'seat_general',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_general',
        data: {
          name: 'Vehicles / Cockpit'
        },
        children: [
          {
            key: 'v_close_all_doors',
            data: {
              name: 'Close All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_cooler_throttle_down',
            data: {
              name: 'Decrease Cooler Rate',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_cooler_throttle_up',
            data: {
              name: 'Increase Cooler Rate',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_flightready',
            data: {
              name: 'Flight & Systems Ready',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_lock_all_doors',
            data: {
              name: 'Lock All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_all_doorlocks',
            data: {
              name: 'Lock All Doors',
              category: 'Lock & Unlock Doors',
              actionmapName: 'spaceship_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_all_doorlocks',
            data: {
              name: 'Unlock All Doors',
              category: 'Unlock All Doors',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_open_all_doors',
            data: {
              name: 'Open All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_all_doors',
            data: {
              name: 'Open & Close All Doors',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_lock_all_ports',
            data: {
              name: 'Lock All Ports',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_unlock_all_ports',
            data: {
              name: 'Unlock All Ports',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_all_portlocks',
            data: {
              name: 'Port Lock Toggle All',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_self_destruct',
            data: {
              name: 'Self Destruct',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_general',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_view',
        data: {
          name: 'Vehicles / View'
        },
        children: [
          {
            key: 'v_view_cycle_fwd',
            data: {
              name: 'Cycle Camera View',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_zoom_in',
            data: {
              name: 'Zoom In (Third Person View)',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_zoom_out',
            data: {
              name: 'Zoom Out (Third Person View)',
              category: 'Vehicles / Cockpit',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_abs',
            data: {
              name: 'Dynamic Zoom In & Out (Absolute)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_abs_toggle',
            data: {
              name: 'Dynamic Zoom Toggle (Absolute)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_view_dynamic_zoom_rel',
            data: {
              name: 'Dynamic Zoom In & Out (Relative)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_rel_in',
            data: {
              name: 'Dynamic Zoom In (Relative)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_dynamic_zoom_rel_out',
            data: {
              name: 'Dynamic Zoom Out (Relative)',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_freelook_mode',
            data: {
              name: 'Freelook',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_view_mode',
            data: {
              name: 'Cycle Camera Orbit Mode',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_pitch',
            data: {
              name: 'Look/Pitch Up & Down',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_view_pitch_down',
            data: {
              name: 'Look/Pitch Down',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_pitch_up',
            data: {
              name: 'Look/Pitch Up',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_yaw',
            data: {
              name: 'Look/Yaw Left & Right',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_view_yaw_left',
            data: {
              name: 'Look/Yaw Left',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          },
          {
            key: 'v_view_yaw_right',
            data: {
              name: 'Look/Yaw Right',
              category: 'Vehicles / View',
              actionmapName: 'spaceship_view',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_movement',
        data: {
          name: 'Flight / Movement'
        },
        children: [
          {
            key: 'v_strafe_abs_rel_swap',
            data: {
              name: 'Throttle - Swap Relative & Absolute',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'press'
            }
          },
          {
            key: 'v_strafe_back_abs',
            data: {
              name: 'Throttle - Backwards (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_back_abs_rel',
            data: {
              name: 'Throttle - Backwards (Relative)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_back_abs_rel',
            data: {
              name: 'Throttle - Backwards (Relative & Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_down',
            data: {
              name: 'Strafe Down (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_forward_abs',
            data: {
              name: 'Throttle - Forward (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_forward_abs_rel',
            data: {
              name: 'Throttle - Forward (Absolute & Relative)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_forward_rel',
            data: {
              name: 'Throttle - Forward (Relative)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'pressHold'
            }
          },
          {
            key: 'v_strafe_lateral',
            data: {
              name: 'Strafe Left & Right (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_strafe_left',
            data: {
              name: 'Strafe Left (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_strafe_longitudinal_abs',
            data: {
              name: 'Strafe Forward & Backward (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_strafe_longitudinal_abs_rel',
            data: {
              name: 'Strafe Forward & Backward (Absolute & Relative)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_strafe_longitudinal_rel',
            data: {
              name: 'Strafe Forward & Backward (Relative)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_strafe_longitudinal_invert',
            data: {
              name: 'Strafe Forward & Back Invert',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_reset_rel_long',
            data: {
              name: 'Throttle - Remove Trim (Long)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_reset_rel_short',
            data: {
              name: 'Throttle - Remove Trim (Short)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_set_rel_from_abs_long',
            data: {
              name: 'Throttle - Set Trim (Long)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_set_rel_from_abs_short',
            data: {
              name: 'Throttle - Set Trim (Short)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_strafe_right',
            data: {
              name: 'Strafe Right (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_strafe_vertical',
            data: {
              name: 'Strafe Up & Down (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_target_match_vel',
            data: {
              name: 'Match Target Velocity',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_speed_range_abs',
            data: {
              name: 'Speed Limiter (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_speed_range_down',
            data: {
              name: 'Speed Limiter Decrease',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_speed_range_up',
            data: {
              name: 'Speed Limiter Increase',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_speed_range_rel',
            data: {
              name: 'Speed Limiter (Relative)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_accel_range_abs',
            data: {
              name: 'Acceleration Limiter Up/Down (Absolute)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_accel_range_up',
            data: {
              name: 'Acceleration Limiter Increase',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_accel_range_down',
            data: {
              name: 'Acceleration Limiter Decrease',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_accel_range_rel',
            data: {
              name: 'Acceleration Limiter Up/Down (Relative)',
              inputType: 'Press'
            }
          },
          {
            key: 'v_afterburner',
            data: {
              name: 'Afterburner',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_atc_loading_area_request',
            data: {
              name: 'ATC Loading Request',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_atc_request',
            data: {
              name: 'ATC Request Landing',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_deploy_landing_system',
            data: {
              name: 'Landing System (Deploy)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_retract_landing_system',
            data: {
              name: 'Landing System (Retract)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_landing_system',
            data: {
              name: 'Landing System (Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_vtol',
            data: {
              name: 'Toggle VTOL',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_yaw_roll_swap',
            data: {
              name: 'Swap Yaw & Roll (Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_transform_cycle',
            data: {
              name: 'Cycle Configuration',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_transform_deploy',
            data: {
              name: 'Expand Configuration',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_transform_retract',
            data: {
              name: 'Retract Configuration',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_engage_jump',
            data: {
              name: 'Jump Drive - Engage Jump',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_toggle_jump_request',
            data: {
              name: 'Jump Drive - Request Jump',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_esp_hold',
            data: {
              name: 'IFCS ESP Hold',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_ifcs_speed_limiter_reset_scm',
            data: {
              name: 'Speed Limiter - Reset to SCM Speed',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_toggle_cruise_control',
            data: {
              name: 'Cruise Control',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_toggle_esp',
            data: {
              name: 'ESP Toggle On & Off (Press)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_toggle_gforce_safety',
            data: {
              name: 'G-Force Safety On/Off (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_ifcs_toggle_speed_limiter',
            data: {
              name: 'Speed Limiter On/Off (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'Press'
            }
          },
          {
            key: 'v_ifcs_toggle_vector_decoupling',
            data: {
              name: 'Decoupled Mode (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_lock_rotation',
            data: {
              name: 'Lock Pitch & Yaw Movement (Hold/Toggle)',
              category: 'Flight / Movement',
              actionmapName: 'spaceship_movement',
              inputType: 'PressHold'
            }
          }
        ]
      },
      {
        key: 'spaceship_quantum',
        data: {
          name: 'Flight / Quantum Travel'
        },
        children: [
          {
            key: 'v_toggle_qdrive_engagement',
            data: {
              name: 'Engage Quantum Drive (Hold)',
              category: 'Flight / Quantum Travel',
              actionmapName: 'spaceship_quantum',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_toggle_docking_mode',
            data: {
              name: 'Toggle Docking Mode',
              category: 'Flight / Quantum Travel',
              actionmapName: 'spaceship_docking',
              inputType: 'Press'
            }
          },
          {
            key: 'v_invoke_docking',
            data: {
              name: 'Invoke Docking',
              category: 'Flight / Quantum Travel',
              actionmapName: 'spaceship_docking',
              inputType: 'Press'
            }
          },
          {
            key: 'v_dock_toggle_view',
            data: {
              name: 'Toggle Docking View',
              category: 'Flight / Quantum Travel',
              actionmapName: 'spaceship_docking',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_targeting',
        data: {
          name: 'Flight / Docking'
        },
        children: [
          {
            key: 'v_enter_remote_turret_1',
            data: {
              name: 'Enter Remote Turret 1',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_enter_remote_turret_2',
            data: {
              name: 'Enter Remote Turret 2',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_enter_remote_turret_3',
            data: {
              name: 'Enter Remote Turret 3',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_look_ahead_enable',
            data: {
              name: 'Enable / Disable Look Ahead',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_look_ahead_start_target_tracking',
            data: {
              name: 'Enable / Disable Target Padlock (Toggle, Hold)',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'PressHold'
            }
          },
          {
            key: 'v_target_lock_selected',
            data: {
              name: 'Lock Selected Target',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_unlock_selected',
            data: {
              name: 'Unlock Selected Target',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_target_pin_selected',
            data: {
              name: 'Pin Selected Target (Press)',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_pin_selected_hold',
            data: {
              name: 'Pin Selected Target (Hold)',
              category: 'Flight / Docking',
              actionmapName: 'spaceship_targeting',
              inputType: 'Hold'
            }
          }
        ]
      },
      {
        key: 'spaceship_targeting_advanced',
        data: {
          name: 'Vehicles / Target Cycling'
        },
        children: [
          {
            key: 'v_target_cycle_all_back',
            data: {
              name: 'Cycle Lock - All - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_all_fwd',
            data: {
              name: 'Cycle Lock - All - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_all_reset',
            data: {
              name: 'Cycle Lock - All - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_attacker_back',
            data: {
              name: 'Cycle Lock - Attacker - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_attacker_fwd',
            data: {
              name: 'Cycle Lock - Attacker - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_attacker_reset',
            data: {
              name: 'Cycle Lock - Attacker - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_friendly_back',
            data: {
              name: 'Cycle Lock - Friendly - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_friendly_fwd',
            data: {
              name: 'Cycle Lock - Friendly - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_friendly_reset',
            data: {
              name: 'Cycle Lock - Friendly - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_hostile_back',
            data: {
              name: 'Cycle Lock - Hostiles - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_hostile_fwd',
            data: {
              name: 'Cycle Lock - Hostiles - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_hostile_reset',
            data: {
              name: 'Cycle Lock - Hostiles - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_in_view_back',
            data: {
              name: 'Cycle Lock - In View - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_in_view_fwd',
            data: {
              name: 'Cycle Lock - In View - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_in_view_reset',
            data: {
              name: 'Cycle Lock - In View - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_pinned_back',
            data: {
              name: 'Cycle Lock - Pinned - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_pinned_fwd',
            data: {
              name: 'Cycle Lock - Pinned - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_pinned_reset',
            data: {
              name: 'Cycle Lock - Pinned - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_subitem_back',
            data: {
              name: 'Cycle Lock - Sub-Target - Back',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_subitem_fwd',
            data: {
              name: 'Cycle Lock - Sub-Target - Forward',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'v_target_cycle_subitem_reset',
            data: {
              name: 'Cycle Lock - Sub-Target - Reset',
              category: 'Vehicles / Target Cycling',
              actionmapName: 'spaceship_targeting_advanced',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_target_hailing',
        data: {
          name: 'Vehicles / Target Hailing'
        },
        children: [
          {
            key: 'v_target_hail',
            data: {
              name: 'Hail Target',
              category: 'Flight / Target Hailing',
              actionmapName: 'spaceship_target_hailing',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_radar',
        data: {
          name: 'Vehicles / Radar'
        },
        children: [
          {
            key: 'v_invoke_ping',
            data: {
              name: 'Activate Ping (Hold & Release)',
              category: 'Vehicles / Radar',
              actionmapName: 'spaceship_radar',
              inputType: 'Hold'
            }
          },
          {
            key: 'v_scanning_trigger_scan',
            data: {
              name: 'Activate Scanning',
              category: 'Vehicles / Scanning',
              actionmapName: 'spaceship_scanning',
              inputType: 'Press'
            }
          },
          {
            key: 'v_inc_scan_focus_level',
            data: {
              name: 'Increase Scanning Angle',
              category: 'Vehicles / Scanning',
              actionmapName: 'spaceship_scanning',
              inputType: 'Press'
            }
          },
          {
            key: 'v_dec_scan_focus_level',
            data: {
              name: 'Decrease Scanning Angle',
              category: 'Vehicles / Scanning',
              actionmapName: 'spaceship_scanning',
              inputType: 'Press'
            }
          }
        ]
      },
      {
        key: 'spaceship_mining',
        data: {
          name: 'Vehicles / Mining'
        },
        children: [
          {
            key: 'v_toggle_mining_laser_fire',
            data: {
              name: 'Fire Mining Laser (Toggle)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_toggle_mining_laser_type',
            data: {
              name: 'Switch Mining Laser (Toggle)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Toggle'
            }
          },
          {
            key: 'v_mining_throttle',
            data: {
              name: 'Increase / Decrease Mining Laser Power',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Axis'
            }
          },
          {
            key: 'v_increase_mining_throttle',
            data: {
              name: 'Increase Mining Laser Power',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_decrease_mining_throttle',
            data: {
              name: 'Decrease Mining Laser Power',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_jettison_volatile_cargo',
            data: {
              name: 'Jettison Cargo',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_mining_use_consumable1',
            data: {
              name: 'Activate Mining Module (Slot 1)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_mining_use_consumable2',
            data: {
              name: 'Activate Mining Module (Slot 2)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          },
          {
            key: 'v_mining_use_consumable3',
            data: {
              name: 'Activate Mining Module (Slot 3)',
              category: 'Vehicles / Mining',
              actionmapName: 'spaceship_mining',
              inputType: 'Press'
            }
          }
        ]
      },
      // spaceship_salvage / Vehicles - Salvage
      {
        key: 'spaceship_salvage',
        data: {
          name: 'Vehicles / Salvage'
        },
        children: [
          {
            key: 'tractor_beam_vehicle_increase_distance',
            data: {
              name: 'Tractor Beam Vehicle - Increase Distance',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'tractor_beam_vehicle_decrease_distance',
            data: {
              name: 'Tractor Beam Vehicle - Decrease Distance',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_beam_spacing_abs',
            data: {
              name: 'Salvage Beam Spacing (Absolute)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_beam_spacing_rel',
            data: {
              name: 'Salvage Beam Spacing (Relative)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_focused',
            data: {
              name: 'Cycle Focused Salvage Modifiers',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_left',
            data: {
              name: 'Cycle Left Salvage Modifiers',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_right',
            data: {
              name: 'Cycle Right Salvage Modifiers',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_cycle_modifiers_structural',
            data: {
              name: 'Cycle Structural Salvage Modes',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_increase_beam_spacing',
            data: {
              name: 'Increase Beam Spacing',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_decrease_beam_spacing',
            data: {
              name: 'Decrease Beam Spacing',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_all_heads',
            data: {
              name: 'Focus All Salvage Heads',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_left',
            data: {
              name: 'Focus Left Salvage Heads',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_right',
            data: {
              name: 'Focus Right Salvage Heads',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_disintegrate',
            data: {
              name: 'Focus Disintergration Tool',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_focus_fracture',
            data: {
              name: 'Focus Fracture Tool',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_increase_beam_spacing',
            data: {
              name: 'Focus Fracture Tool',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_up__left',
            data: {
              name: 'Nudge Left Salvage Tool Up',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_down__left',
            data: {
              name: 'Nudge Left Salvage Tool Down',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_down__right',
            data: {
              name: 'Nudge Left Salvage Tool Down',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_left__left',
            data: {
              name: 'Nudge Left Salvage Tool Left',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_down__right',
            data: {
              name: 'Nudge Left Salvage Tool Down',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_left__left',
            data: {
              name: 'Nudge Left Salvage Tool Left',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_left__right',
            data: {
              name: 'Nudge Left Salvage Tool Right',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_right__left',
            data: {
              name: 'Nudge Right Salvage Tool Left',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_right__right',
            data: {
              name: 'Nudge Right Salvage Tool Right',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_nudge_up__right',
            data: {
              name: 'Nudge Right Salvage Tool Up',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_reset_gimbal',
            data: {
              name: 'Reset Salvage Gimbal',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_beam_spacing_axis',
            data: {
              name: 'Salvage Beam Axis (Toggle)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_disintegrate',
            data: {
              name: 'Toggle Fire Disintegrate',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_focused',
            data: {
              name: 'Toggle Fire Focused',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_fracture',
            data: {
              name: 'Toggle Fire Fracture',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_left',
            data: {
              name: 'Toggle Fire Left',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_fire_left',
            data: {
              name: 'Toggle Fire Right',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          },
          {
            key: 'v_salvage_toggle_gimbal_mode',
            data: {
              name: 'Salvage Mode Gimbal (Toggle)',
              category: 'Vehicles / Salvage',
              actionmapName: 'spaceship_salvage',
              inputType: 'Press'
            }
          }
        ]
      },
      // turret_movement / Turret Movement
      {
        key: 'turret_movement',
        data: {
          name: 'Turret Movement'
        },
        children: [
          {
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Gryo Stablization (Toggle)',
              category: 'Turret Movement',
              inputType: 'Toggle'
            },
            key: 'turret_gyromode'
          },
          {
            key: 'turret_pitch',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Up & Down',
              category: 'Turret Movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_pitch',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Up',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_pitch_up',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Up',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_pitch_down',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Pitch Down',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_yaw',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Yaw',
              category: 'Turret Movement',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_yaw_left',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Yaw Left',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_yaw_right',
            data: {
              actionmapName: 'turret_movement',
              name: 'Turret Yaw Right',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_exit',
            data: {
              actionmapName: 'turret_movement',
              name: 'Exit Remote Turret',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_zoom_in',
            data: {
              actionmapName: 'turret_movement',
              name: 'Zoom In (Remote Turret)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_zoom_out',
            data: {
              actionmapName: 'turret_movement',
              name: 'Zoom Out (Remote Turret)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_remote_zoom_toggle',
            data: {
              actionmapName: 'turret_movement',
              name: 'Zoom Toggle (Remote Turret)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_toggle_mouse_mode',
            data: {
              actionmapName: 'turret_movement',
              name: 'Toggle Turret Mouse Movement (VJoy <-> FPS)',
              category: 'Turret Movement',
              inputType: 'Press'
            }
          }
        ]
      },
      // turret_advanced / Turret Advanced
      {
        key: 'turret_movement',
        data: {
          name: 'Turret Movement Advanced'
        },
        children: [
          {
            key: 'turret_change_firemode',

            data: {
              actionmapName: 'turret_advanced',
              name: 'Cycle Fire Mode (Staggerd <-> Combined)',
              category: 'Turret Advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_change_position',

            data: {
              actionmapName: 'turret_advanced',
              name: 'Change Turret Position',
              category: 'Turret Advanced',
              inputType: 'Press'
            }
          },
          {
            key: 'turret_esp_hold',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret ESP - Enable Temporarily (Hold)',
              category: 'Turret Advanced',
              inputType: 'Hold'
            }
          },
          {
            key: 'turret_esp_toggle',
            data: {
              actionmapName: 'turret_advanced',

              name: 'Turret ESP Toggle On / Off',
              category: 'Turret Advanced',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_instant_zoom',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret Instant Zoom',
              category: 'Turret Advanced',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_limiter_abs',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Speed Limiter (Absolute)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_rel',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Speed Limiter (Relative)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_rel_decrease',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Decrease Speed Limiter (Relative)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_rel_increase',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Increase Speed Limiter (Relative)',
              category: 'Turret Advanced',
              inputType: 'Axis'
            }
          },
          {
            key: 'turret_limiter_toggle',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Turret - Toggle Speed Limiter On / Off (Hold/Toggle)',
              category: 'Turret Advanced',
              inputType: 'Toggle'
            }
          },
          {
            key: 'turret_recenter',
            data: {
              actionmapName: 'turret_advanced',
              name: 'Recenter Turret (Hold)',
              category: 'Turret Advanced',
              inputType: 'Hold'
            }
          }
        ]
      },

      // spaceship_weapons / Vehicles - Weapons
      {
        key: 'spaceship_weapons',
        data: {
          name: 'Vehicles / Weapons'
        },
        children: [
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Fire Weapon All',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_attack_all'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Fire Weapon Group 1',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_attack_group1'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Fire Weapon Group 2',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_attack_group2'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Cycle Fire Mode (Staggered <-> Combined)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_change_firemode'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance (Absolute)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            },
            key: 'v_weapon_convergence_distance_abs'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            },
            key: 'v_weapon_convergence_distance_rel'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance - Decrease (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            },
            key: 'v_weapon_convergence_distance_rel_decrease'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance - Increase (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Axis'
            },
            key: 'v_weapon_convergence_distance_rel_increase'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Convergence Distance - Reset (Relative)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_convergence_distance_set_default'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Cycle Gimbal Assist / Standard Gimbal / Gimbal Lock Modes',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_cycle_all'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Cycle Fixed / Auto Gimbal Modes',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_cycle_fixed_auto'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Auto Gimbal Mode (Short Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_set_auto'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Auto Gimbal Mode (Long Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_set_auto_long'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Fixed Gimbal Mode (Short Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_set_fixed'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Fixed Gimbal Mode (Long Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_set_fixed_long'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Manual Gimbal Mode (Short Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_set_manual'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Manual Gimbal Mode (Long Press)',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_gimbal_mode_set_manual_long'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Gimble Mode - Swap VJoy / Look Direction (Toggle, Hold)',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            },
            key: 'v_weapon_manual_gimbal_cycle_source'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Manual Gimble Mode - Lock Aim Vector',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            },
            key: 'v_weapon_manual_gimbal_lock_vector'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Set Average of All',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_pip_combination_type_set_combined_all'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Set One Pip Per Weapon Type',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_pip_combination_type_set_combined_weapon_group'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Set One Pip Per Weapon',
              category: 'Vehicles / Weapons',
              inputType: 'Press'
            },
            key: 'v_weapon_pip_combination_type_set_single'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'PIP Combination Type: Toggle',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            },
            key: 'v_weapon_pip_combination_type_toggle'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Toggle Lead / Lag PIPs',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            },
            key: 'v_weapon_pip_toggle_lead_lag'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Lag PIPs',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            },
            key: 'v_weapon_pip_set_lag'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Set Lead PIPs',
              category: 'Vehicles / Weapons',
              inputType: 'Toggle'
            },
            key: 'v_weapon_pip_set_lead'
          },
          {
            data: {
              actionmapName: 'spaceship_weapons',
              name: 'Suppress Aim Assist (Hold)',
              category: 'Vehicles / Weapons',
              inputType: 'Hold'
            },
            key: 'v_weapon_suppress_aim_assists_hold'
          }
        ]
      },
      // spaceship_missiles / Vehicles - Missiles
      {
        key: 'spaceship_missiles',
        data: {
          name: 'Vehicles / Missiles'
        },
        children: [
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Increase HUD Range',
              category: 'Vehicles / Missiles',
              inputType: 'Hold'
            },
            key: 'v_weapon_bombing_hud_range_increase'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Decrease HUD Range',
              category: 'Vehicles / Missiles',
              inputType: 'Hold'
            },
            key: 'v_weapon_bombing_hud_range_decrease'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Reset HUD Range',
              category: 'Vehicles / Missiles',
              inputType: 'Hold'
            },
            key: 'v_weapon_bombing_hud_range_reset'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Toggle Desired Impact Point (Tap)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_bombing_toggle_desired_impact_point'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Bombs - Toggle Desired Impact Point (Hold)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_bombing_toggle_desired_impact_point_hold'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Cycle Next Missile',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_cycle_missile_fwd'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Cycle Previous Missile',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_cycle_missile_back'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Decrease Number of Armed Missiles',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_decrease_max_missiles'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Increase Number of Armed Missiles',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_increase_max_missiles'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Reset Number of Armed Missiles',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_reset_max_missiles'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Launch Missile (Tap)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_launch_missile'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Launch Missile (Hold)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_toggle_launch_missile'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Enable Cinematic Camera (Tap)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_launch_missile_cinematic'
          },
          {
            data: {
              actionmapName: 'spaceship_missiles',
              name: 'Enable Cinematic Camera (Hold)',
              category: 'Vehicles / Missiles',
              inputType: 'Press'
            },
            key: 'v_weapon_launch_missile_cinematic_hold'
          }
        ]
      },

      // spaceship_defensive / Vehicles - Shields and Countermeasures
      {
        key: 'spaceship_defensive',
        data: {
          name: 'Vehicles / Shields and Countermeasures'
        },
        children: [
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Back',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_raise_level_back'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Bottom',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_raise_level_down'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Forward',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_raise_level_forward'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Left',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_raise_level_left'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Left',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_raise_level_right'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Raise Level Top',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_raise_level_up'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Reset Levels',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_reset_level'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Shield Reset Levels',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_shield_reset_level'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Decrease Burst Size (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_weapon_countermeasure_decoy_burst_decrease'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Increase Burst Size (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_weapon_countermeasure_decoy_burst_increase'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Launch Burst (Tap), Set & Launch Burst (Hold)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_weapon_countermeasure_decoy_launch'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decoy - Panic Launch (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_weapon_countermeasure_decoy_launch_panic'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Noise - Deploy (Tap)',
              category: 'Vehicles / Shields and Countermeasures',
              inputType: 'Press'
            },
            key: 'v_weapon_countermeasure_noise_launch'
          }
        ]
      },
      // vehicle_capacitor_assignment / Vehicles - Power Triangle Assignment
      {
        key: 'spaceshivehicle_capacitor_assignmentp_defensive',
        data: {
          name: 'Vehicles / Power Triangle Assignment'
        },
        children: [
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Decrease Power (Tap) / Set to Minimum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_engine_combined_decrease_min'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Increase Power (Tap) / Set to Maximum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_engine_combined_increase_max'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Decrease Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_engine_decrease'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Increase Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_engine_increase'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Set to Maximum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_engine_max'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Engines - Set to Minimum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_engine_min'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Reset Assignment',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_reset'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Decrease Power (Tap) / Set to Minimum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_shield_combined_decrease_min'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Increase Power (Tap) / Set to Maximum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_shield_combined_increase_max'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Decrease Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_shield_decrease'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Increase Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_shield_increase'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Set to Maximum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_shield_max'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields - Set to Minimum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_shield_min'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Shields Assignment',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_reset'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Decrease Power (Tap) / Set to Minimum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_weapon_combined_decrease_min'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Increase Power (Tap) / Set to Maximum (Hold)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_weapon_combined_increase_max'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Decrease Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_weapon_decrease'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Increase Power (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_weapon_increase'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Set to Maximum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_weapon_max'
          },
          {
            data: {
              actionmapName: 'vehicle_capacitor_assignment',
              name: 'Weapons - Set to Minimum (Tap)',
              category: 'Vehicles / Power Triangle Assignment',
              inputType: 'Press'
            },
            key: 'v_capacitor_assignment_weapon_min'
          }
        ]
      },
      // spaceship_power / Flight - Power
      {
        key: 'spaceship_power',
        data: {
          name: 'Flight / Power'
        },
        children: [
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_off'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_on'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - Shields',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_toggle_shields'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Shields Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_shields_off'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Shields Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_shields_on'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - Thrusters',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_toggle_thrusters'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Thrusters Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_thrusters_off'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Thrusters Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_thrusters_on'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - Weapons',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_toggle_weapons'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Weapons Power Off',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_weapons_off'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Set Weapons Power On',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_set_weapons_on'
          },
          {
            data: {
              actionmapName: 'spaceship_defensive',
              name: 'Decrease Throttle ',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_throttle_down'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Decrease Throttle To Minimum ',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_throttle_min'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Increase Throttle',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_throttle_up'
          },
          {
            data: {
              actionmapName: 'spaceship_power',
              name: 'Toggle Power - All',
              category: 'Flight / Power',
              inputType: 'Press'
            },
            key: 'v_power_toggle'
          }
        ]
      },
      // spaceship_hud / Flight - HUD
      {
        key: 'spaceship_hud',
        data: {
          name: 'Flight / HUD'
        },
        children: [
          {
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Cycle Pitch Ladder Mode',
              category: 'Flight / HUD',
              inputType: 'Press'
            },
            key: 'v_cycle_pitch_ladder_mode'
          },
          {
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Open Scoreboard',
              category: 'Flight / HUD',
              inputType: 'Press'
            },
            key: 'v_hud_open_scoreboard'
          },
          {
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Open Map (Starmap)',
              category: 'Flight / HUD',
              inputType: 'Press'
            },
            key: 'v_starmap'
          },
          {
            data: {
              actionmapName: 'spaceship_hud',
              name: 'Wipe Helmet Visor',
              category: 'Flight / HUD',
              inputType: 'Press'
            },
            key: 'visor_wipe'
          }
        ]
      },
      // lights_controller / Lights
      {
        key: 'lights_controller',
        data: {
          name: 'Lights'
        },
        children: [
          {
            key: 'v_lights',
            data: {
              actionmapName: 'lights_controller',
              name: 'Headlights (Toggle)',
              category: 'Lights',
              inputType: 'Press'
            }
          }
        ]
      },
      // Stopwatch / stopwatch
      {
        key: 'stopwatch',
        data: { name: 'Stopwatch' },
        children: [
          {
            key: 'stopwatch_reset',
            data: {
              actionmapName: 'stopwatch',
              name: 'Reset (Long Press)',
              category: 'Stopwatch',
              inputType: 'Hold'
            }
          },
          {
            key: 'player',
            data: {
              actionmapName: 'stopwatch',
              name: 'Start / Pause (Short Press)',
              category: 'Stopwatch',
              inputType: 'Hold'
            }
          }
        ]
      },
      // player / On Foot - All

      {
        key: 'player',
        data: { name: 'On Foot / All' },
        children: [
          {
            data: {
              actionmapName: 'player',
              name: 'Repool Ammo',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'ammoRepool'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Firearm - Attack',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'attack1'
          },
          {
            data: {
              actionmapName: 'player',
              name: '?????',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'consume'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Customize Weapon',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'customize'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Drop Item',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'drop'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Default Movement Speed Decrease',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'fixed_speed_decrement'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Default Movement Speed Increase',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'fixed_speed_increment'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Force Respawn (EVA / On Foot)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'force_respawn'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Crouch',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'gp_crouch'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Jump',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'jump'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Move Forward',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'gp_movex'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Move Left / Right',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'gp_movey'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Look - Pitch',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'gp_rotatepitch'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Look - Yaw',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'gp_rotateyaw'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Holster Weapon',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'holster'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Inspect Item',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'inspect'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Lean Left',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'leanright'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Lean Right',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'leanleft'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Grab Ledge',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'ledgegrab'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Medical Pen - Inject Other',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'melee_AttackSyringeStab'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Melee - Attack Heavy Left',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'melee_AttackHeavyLeft'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Melee - Attack Left',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'melee_AttackLightLeft'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Melee - Attack Heavy Right',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'melee_AttackHeavyRight'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Melee - Attack Right',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'melee_AttackLightRight'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Melee - Block',
              category: 'On Foot / All',
              inputType: 'Hold'
            },
            key: 'melee_block'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Move Backwards',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'moveback'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Move Forwards',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'moveforward'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Move Left',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'moveleft'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Move Right',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'moveright'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Next Weapon',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'nextweapon'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Previous Weapon',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'prevweapon'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Sprint',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'sprint'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Prone',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'prone'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Reload',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'reload'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Reload Secondary',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'reloadSecondary'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Select Melee',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'selectMeleeWeapon'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Melee - Attack (Ranged Weapon & Takedowns)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'weapon_melee'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Select Unarmed Combat',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'selectUnarmedCombat'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Select Gadget',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'selectgadget'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Select Skeyearm',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'selectpistol'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Select Primary Weapon',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'selectprimary'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Select Secondary Weapon',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'selectsecondary'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Ship Recall',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'ship_recall'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Hold Breath (ADS)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'stabilize'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Hold Breath (ADS)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'stabilize'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Free View Camera (Hold)',
              category: 'On Foot / All',
              inputType: 'Hold'
            },
            key: 'free_thirdperson_camera'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Third Person View (Toggle)',
              category: 'On Foot / All',
              inputType: 'Toggle'
            },
            key: 'thirdperson'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Throw - Overhand & Two-Handed',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'throw_overhand'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Throw - Underarm',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'throw_underhand'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Helmet',
              category: 'On Foot / All',
              inputType: 'Toggle'
            },
            key: 'toggleAttachHelmet'
          },
          {
            data: {
              actionmapName: 'player',
              name: '?toggleHelmetState',
              category: 'On Foot / All',
              inputType: 'Toggle'
            },
            key: 'toggleHelmetState'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Flashlight (Toggle)',
              category: 'On Foot / All',
              inputType: 'Toggle'
            },
            key: 'toggle_flashlight'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Map / Starmap',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'v_starmap'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Wipe Helmet Visor',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'visor_wipe'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Walk',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'walk'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'FPS Underbarrel Attachment Action',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'weapon_auxiliary_action'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Change Fire Mode',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'weapon_change_firemode'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Weapon Zeroing Decrease',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'weapon_zeroing_decrease'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Weapon Zeroing Increase / Auto',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'weapon_zeroing_increase'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Aim Down Sight',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'zoom'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Zoom In (ADS)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'zoom_in'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Zoom Out (ADS)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'zoom_out'
          },
          {
            data: {
              actionmapName: 'player',
              name: 'Zoom In / Out (ADS)',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'zoom_in_out'
          }
        ]
      },
      // SUBCHILD: prone
      {
        key: 'playerProne',
        data: { name: 'On Foot / All / Prone' },
        children: [
          {
            data: {
              actionmapName: 'prone',
              name: 'Roll Left (While Prone)',
              category: 'On Foot / All',
              inputType: 'Axis'
            },
            key: 'prone_rollleft'
          },
          {
            data: {
              actionmapName: 'prone',
              name: 'Roll Right (While Prone)',
              category: 'On Foot / All',
              inputType: 'Axis'
            },
            key: 'prone_rollright'
          }
        ]
      },
      // SUBCHILD: tractor_beam
      {
        key: 'playerTractorBeam',
        data: { name: 'On Foot / All / Tractor Beam' },
        children: [
          {
            data: {
              actionmapName: 'tractor_beam',
              name: 'Tractor Beam - Decrease Distance',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'tractor_beam_decrease_distance'
          },
          {
            data: {
              actionmapName: 'tractor_beam',
              name: 'Tractor Beam - Increase Distance',
              category: 'On Foot / All',
              inputType: 'Press'
            },
            key: 'tractor_beam_increase_distance'
          }
        ]
      },
      // zero_gravity_eva / EVA - ALL
      {
        key: 'zero_gravity_eva',
        data: { name: 'EVA / All' },
        children: [
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Boost',
              category: 'EVA / All',
              inputType: 'Hold'
            },
            key: 'eva_boost'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Brake',
              category: 'EVA / All',
              inputType: 'Hold'
            },
            key: 'eva_brake'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Roll Left / Right',
              category: 'EVA / All',
              inputType: 'Axis'
            },
            key: 'eva_roll'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Roll Left',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_roll_left'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Roll Right',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_roll_right'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Back',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_strafe_back'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Up / Down',
              category: 'EVA / All',
              inputType: 'Axis'
            },
            key: 'eva_strafe_vertical'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Up',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_strafe_up'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Down',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_strafe_down'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Forward',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_strafe_forward'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Left / Right',
              category: 'EVA / All',
              inputType: 'Axis'
            },
            key: 'eva_strafe_lateral'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Left',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_strafe_left'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA Strafe Right',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_strafe_right'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'Freelook (Hold)',
              category: 'EVA / All',
              inputType: 'Hold'
            },
            key: 'eva_toggle_headlook_mode'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA View Up / Down',
              category: 'EVA / All',
              inputType: 'Axis'
            },
            key: 'eva_view_pitch'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA View Down',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_view_pitch_down'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA View Up',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_view_pitch_up'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA View Left / Right',
              category: 'EVA / All',
              inputType: 'Axis'
            },
            key: 'eva_view_yaw'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA View Left',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_view_yaw_left'
          },
          {
            data: {
              actionmapName: 'zero_gravity_eva',
              name: 'EVA View Right',
              category: 'EVA / All',
              inputType: 'Press'
            },
            key: 'eva_view_yaw_right'
          }
        ]
      },
      // zero_gravity_traversal / Zero G Traversal
      {
        key: 'zero_gravity_traversal',
        data: { name: 'Zero G Traversal' },
        children: [
          {
            data: {
              actionmapName: 'zero_gravity_traversal',
              name: 'EVA Detach',
              category: 'Zero G Traversal',
              inputType: 'Press'
            },
            key: 'zgt_detach'
          },
          {
            data: {
              actionmapName: 'zero_gravity_traversal',
              name: 'EVA Launch',
              category: 'Zero G Traversal',
              inputType: 'Press'
            },
            key: 'zgt_launch'
          },
          {
            data: {
              actionmapName: 'zero_gravity_traversal',
              name: 'EVA Roll Left',
              category: 'Zero G Traversal',
              inputType: 'Press'
            },
            key: 'zgt_roll_left'
          },
          {
            data: {
              actionmapName: 'zero_gravity_traversal',
              name: 'EVA Roll Right',
              category: 'Zero G Traversal',
              inputType: 'Press'
            },
            key: 'zgt_roll_right'
          }
        ]
      },
      // vehicle_general / Ground Vehicle - General
      {
        key: 'vehicle_general',
        data: { name: 'Ground Vehicle / General' },
        children: [
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Fire Weapon All',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_attack_all'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Fire Weapon Group 1',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_attack_group1'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Fire Weapon Group 2',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_attack_group2'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Flight / Systems Ready',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_flightready'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Horn',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_horn'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Lock All Doors',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_lock_all_doors'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Lock All Ports',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_lock_all_ports'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Close All Doors',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_close_all_doors'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Open All Doors',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_open_all_doors'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Open Map / Starmap',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_starmap'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Lock / Unlock Doors (Toggle)',
              category: 'Ground Vehicle / General',
              inputType: 'Toggle'
            },
            key: 'v_toggle_all_doorlocks'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Open / Close Doors (Toggle)',
              category: 'Ground Vehicle / General',
              inputType: 'Toggle'
            },
            key: 'v_toggle_all_doors'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Lock / Unlock Ports (Toggle)',
              category: 'Ground Vehicle / General',
              inputType: 'Toggle'
            },
            key: 'v_toggle_all_portlocks'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Unlock All Doors',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_unlock_all_doors'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Unlock All Ports',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_unlock_all_ports'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Cycle Camera View',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_view_cycle_fwd'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Freelock (Hold)',
              category: 'Ground Vehicle / General',
              inputType: 'Hold'
            },
            key: 'v_view_freelook_mode'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Look Up / Down',
              category: 'Ground Vehicle / General',
              inputType: 'Axis'
            },
            key: 'v_view_pitch'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Look Left / Right',
              category: 'Ground Vehicle / General',
              inputType: 'Axis'
            },
            key: 'v_view_yaw'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Zoom In (Third Person View)',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_view_zoom_in'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Zoom Out (Third Person View)',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'v_view_zoom_out'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Wipe Helmet Visor',
              category: 'Ground Vehicle / General',
              inputType: 'Press'
            },
            key: 'visor_wipe'
          }
        ]
      },

      // vehicle_driver / Ground Vehicle - Movement
      {
        key: 'vehicle_driver',
        data: { name: 'Ground Vehicle / Movement' },
        children: [
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Boost',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_boost'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Brake',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_brake'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Lock Pitch / Yaw Movement (Toggle / Hold)',
              category: 'Ground Vehicle / Movement',
              inputType: 'PressHold'
            },
            key: 'v_lock_rotation'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: '?v_mgv_switch_brake_on_keyle',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_mgv_switch_brake_on_keyle'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Drive Forward / Backward',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_move'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Drive Backward',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_move_back'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Drive Forward',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_move_forward'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Yaw Left / Right (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_yaw'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Yaw Left (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_yaw_left'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Yaw Right (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_yaw_right'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Pitch Up / Down (AXIS / HOTAS)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_pitch'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Pitch Down',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_pitch_down'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Pitch Up',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_pitch_up'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom In & Out (Absolute)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_view_dynamic_zoom_abs'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom Toggle (Absolute)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Toggle'
            },
            key: 'v_view_dynamic_zoom_abs_toggle'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom In & Out (Relative)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Axis'
            },
            key: 'v_view_dynamic_zoom_rel'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom In (Relative)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_view_dynamic_zoom_rel_in'
          },
          {
            data: {
              actionmapName: 'vehicle_general',
              name: 'Dynamic Zoom Out (Relative)',
              category: 'Ground Vehicle / Movement',
              inputType: 'Press'
            },
            key: 'v_view_dynamic_zoom_rel_out'
          }
        ]
      },
      // spectator / Electronic Access - Spectator
      {
        key: 'spectator',
        data: { name: 'Electronic Access / Spectator' },
        children: [
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Mode (Next)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_gen_nextmode'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Mode (Previous)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_gen_prevmode'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Target (Next)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_next_target'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Target (Previous)',
              category: 'Electronic Access / Spectator',
              inputType: 'Press'
            },
            key: 'spectate_prev_target'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Pitch',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotatepitch'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Pitch (Mouse)',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotatepitch_mouse'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Yaw',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotateyaw'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Rotate Yaw (Mouse)',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_rotateyaw_mouse'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator HUD (Toggle)',
              category: 'Electronic Access / Spectator',
              inputType: 'Toggle'
            },
            key: 'spectate_toggle_hud'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Camera Lock Target',
              category: 'Electronic Access / Spectator',
              inputType: 'Toggle'
            },
            key: 'spectate_toggle_lock_target'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Zoom In / Out',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_zoom'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Zoom In',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_zoom_in'
          },
          {
            data: {
              actionmapName: 'spectator',
              name: 'Spectator Zoom Out',
              category: 'Electronic Access / Spectator',
              inputType: 'Axis'
            },
            key: 'spectate_zoom_out'
          }
        ]
        
      },
      //default / Social - General
      {
        key: 'default',
     data:{   name: 'Social / General'},
        children: [
          {
            data: {
              actionmapName: 'default',
              name: 'CommLink App (Toggle)',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'toggle_contact'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Chat Window (Toggle)',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'toggle_chat'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Chat Window Focus',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'focus_on_chat_textinput'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Exit Seat',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'pl_exit'
          },
          {
            data: {
              actionmapName: 'default',
              name: 'Respawn',
              category: 'Social / General',
              inputType: 'Press'
            },
            key: 'respawn'
          }
        ]
        
      },
      //player_emotes / Social - Emotes
      {
        key: 'player_emotes',
      data:{  name: 'Social / Emotes'},
        children: [
          {
            key: 'emote_agree',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Agree',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_angry',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Angry',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_atease',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote At Ease',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_attention',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Atttention',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_blah',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Blah',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_bored',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Bored',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_bow',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Bow',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_burp',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Burp',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cheer',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Cheer',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_chicken',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Chicken',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_clap',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Clap',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_come',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Come',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cry',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Cry',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cs_forward',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Forward',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cs_left',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Left',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cs_yes',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Yes',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cs_no',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote No',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cs_right',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Right',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_cs_stop',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Stop',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_dance',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Dance',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_disagree',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Disagree',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_flex',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Failure',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_failure',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Flex',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_flirt',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Flirt',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_gasp',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Gasp',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_gloat',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Gloat',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_greet',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Greet',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_laugh',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Laugh',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_launch',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Launch',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_point',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Point',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_rude',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Rude',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_salute',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Salute',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_sit',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Sit',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_sleep',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Sleep',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_smell',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Smell',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_taunt',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Taunt',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_threaten',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Threaten',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_wait',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Wait',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_wave',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Wave',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          },
          {
            key: 'emote_whistle',
            data: {
              actionmapName: 'player_emotes',
              name: 'Emote Whistle',
              category: 'Social / Emotes',
              inputType: 'Press'
            }
          }
        ]
        
      },
      // player_input_optical_tracking / VOIP, FOIP, and Headtracking
      {
        key: 'player_input_optical_tracking',
     data:{   name: 'VOIP, FOIP, and Headtracking'},
        children: [
          {
            key: 'foip_cyclechannel',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Cycle Through Audio Channels',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            }
          },
          {
            key: 'foip_pushtotalk',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'VOIP Push To Talk',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            }
          },
          {
            key: 'foip_pushtotalk_proximity',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'VOIP Push To Talk (Proximity Only)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            }
          },
          {
            key: 'foip_recalibrate',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'FOIP Recalibrate',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            }
          },
          {
            key: 'foip_viewownplayer',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'FOIP Selfie Camera',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            }
          },
          {
            key: 'headtrack_camera_enabled',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Enable Head Tracking',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Toggle'
            }
          },
          {
            key: 'headtrack_enabled',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Enable / Disable Head Tracking for Third Person Camera (Toggle)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Toggle'
            }
          },
          {
            key: 'headtrack_hold',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Head Tracking (Hold)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Hold'
            }
          },
          {
            key: 'headtrack_recenter_device',
            data: {
              actionmapName: 'player_input_optical_tracking',
              name: 'Recenter Head Tracking Device (Except TrackIR)',
              category: 'VOIP, FOIP, and Headtracking',
              inputType: 'Press'
            }
          }
        ]
        
      },
      // player_choice / Quick Keys, Intraction, & Inner Thought
      {
        key: 'player_choice',
      data:{  name: 'Quick Keys, Intraction, & Inner Thought'},
        children: [
          {
            key: 'pc_camera_orbit',
            data: {
              actionmapName: 'player_choice',
              name: '?pc_camera_orbit',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_focus',
            data: {
              actionmapName: 'player_choice',
              name: 'Focus',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_interaction_mode',
            data: {
              actionmapName: 'player_choice',
              name: 'Interaction Mode',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_interaction_select',
            data: {
              actionmapName: 'player_choice',
              name: 'Activate Inner Thought',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_personal_back',
            data: {
              actionmapName: 'player_choice',
              name: 'Exit',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_personal_thought',
            data: {
              actionmapName: 'player_choice',
              name: 'Personal Inner Thought (PIT)',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_emotes',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Emotes',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_flight_systems',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Flight Systems',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_inventory',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Inventory',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_item_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Item Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_item_drop',
            data: {
              actionmapName: 'player_choice',
              name: 'Drop Item',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_miningmode_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Mining Mode Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_mobiglas_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Mobiglass Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_player_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Player Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_remote_turrets',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Remote Turret',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_ship_systems',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Ship Systems',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_vehicle_actions',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Vehicle Actions',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_weapon_selection',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Weapon Selection',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_pit_weapons_systems',
            data: {
              actionmapName: 'player_choice',
              name: 'Pit Category - Weapon Systems',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_qs_consumables',
            data: {
              actionmapName: 'player_choice',
              name: 'Consumable Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_qs_flight_mode',
            data: {
              actionmapName: 'player_choice',
              name: 'Flight Mode Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_qs_grenades',
            data: {
              actionmapName: 'player_choice',
              name: 'Throwables Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_qs_weapons_pistol',
            data: {
              actionmapName: 'player_choice',
              name: 'Skeyearm Weapons Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_qs_weapons_secondary',
            data: {
              actionmapName: 'player_choice',
              name: 'Secondary Weapons Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_qs_weapons_primary',
            data: {
              actionmapName: 'player_choice',
              name: 'Primary Weapons Select Radial Menu',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_screen_focus_down',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Down',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_screen_focus_up',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Up',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_screen_focus_left',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Left',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_screen_focus_right',
            data: {
              actionmapName: 'player_choice',
              name: 'MFD Right',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_select',
            data: {
              actionmapName: 'player_choice',
              name: 'Activate Inner Thought (pc_select)',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_zoom_in',
            data: {
              actionmapName: 'player_choice',
              name: 'Interaction Mode Zoom In',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          },
          {
            key: 'pc_zoom_out',
            data: {
              actionmapName: 'player_choice',
              name: 'Interaction Mode Zoom Out',
              category: 'Quick Keys, Interaction, & Inner Thought',
              inputType: 'Press'
            }
          }
        ]
        
      },
      // view_director_mode / Camera - Advanced Camera Controls
      {
        key: 'view_director_mode',
       data:{ name: 'Camera / Advanced Camera Controls'},
        children: [
          {
            key: 'view_fov_in',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Increase FoV',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_fov_out',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Decrease FoV',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_fstop_in',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Increase DoF / fstop',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_fstop_out',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Decrease DoF / fstop',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          },
          {
            key: 'view_restore_defaults',
            data: {
              actionmapName: 'view_director_mode',
              name: 'Reset Current View',
              category: 'Camera / Advanced Camera Controls',
              inputType: 'Press'
            }
          }
        ]
        
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
  getTreeTableNodes () {
    return Promise.resolve(this.getTreeTableNodesData())
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
