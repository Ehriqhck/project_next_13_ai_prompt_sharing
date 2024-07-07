"use client";
import { Tooltip } from 'react-tooltip'
import InputPopover from '@components/generic/InputPopover.jsx'
//Device_VKB_SpaceEvo_RIGHT
import { OverlayPanel } from 'primereact/overlaypanel';
import { useContext } from 'react';
import { SelectContext, EditorPanelTitleContext } from '@components/Provider.jsx'
import React from 'react'
import { Button } from 'primereact/button';
import EditIcon from '@components/generic/Icons/EditIcon.svg'
import ViewIcon from '@components/generic/Icons/ViewIcon.svg'
import Spacer from '@components/generic/Spacer.jsx'
const Device_VKB_SpaceEvo = (props) => {
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
  const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)



  return (
    <>

      <InputPopover InputId={"chipSwitch"} InputName={"CHIP STICK"} TargetId={"#input5_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} />
      <InputPopover InputId={"pillSwitch_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} InputName={"PILL STICK"} TargetId={"#input1_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} />
      <InputPopover InputId={"hatSwitch_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} InputName={"HAT STICK"} TargetId={"#input2_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} />
      <InputPopover InputId={"circleSwitch_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} InputName={"CIRCLE STICK"} TargetId={"#input3_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} />
      <InputPopover InputId={"redButton_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} InputName={"RED BUTTON"} TargetId={"#input4_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"} />

      <div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="Layer_2"
          viewBox="0 0 259 545.6"
          {...props}
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1={0}
              x2={251.1}
              y1={818.85}
              y2={818.85}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00d1b2" stopOpacity={0.5} />
              <stop offset={0.1} stopColor="#00ccae" stopOpacity={0.48} />
              <stop offset={0.2} stopColor="#00c0a4" stopOpacity={0.42} />
              <stop offset={0.31} stopColor="#00ac94" stopOpacity={0.32} />
              <stop offset={0.41} stopColor="#00907d" stopOpacity={0.17} />
              <stop offset={0.52} stopColor="#006e62" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1={0.1}
              x2={226}
              y1={888.2}
              y2={888.2}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.4} stopColor="#006e62" stopOpacity={0} />
              <stop offset={0.41} stopColor="#00796a" stopOpacity={0.02} />
              <stop offset={0.42} stopColor="#00a08a" stopOpacity={0.1} />
              <stop offset={0.45} stopColor="#00bca1" stopOpacity={0.16} />
              <stop offset={0.48} stopColor="#00ccae" stopOpacity={0.19} />
              <stop offset={0.58} stopColor="#00d1b2" stopOpacity={0.2} />
              <stop offset={0.67} stopColor="#00c0a4" stopOpacity={0.2} />
              <stop offset={0.73} stopColor="#008b7a" stopOpacity={0.22} />
              <stop offset={0.75} stopColor="#006e62" stopOpacity={0.22} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-3"
              x1={130.06}
              x2={130.06}
              y1={715.5}
              y2={678.15}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#006e62" stopOpacity={0.5} />
              <stop offset={0.22} stopColor="#003029" stopOpacity={0.5} />
              <stop offset={0.44} stopColor="#00423a" stopOpacity={0.35} />
              <stop offset={0.7} stopColor="#006e62" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-4"
              x1={205.27}
              x2={92.22}
              y1={547.86}
              y2={705.24}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.05} stopColor="#006e62" />
              <stop offset={0.08} stopColor="#007265" />
              <stop offset={0.12} stopColor="#008070" />
              <stop offset={0.16} stopColor="#009783" />
              <stop offset={0.2} stopColor="#00b89c" />
              <stop offset={0.23} stopColor="#00d6b4" />
              <stop offset={0.52} stopColor="#006e62" />
              <stop offset={0.55} stopColor="#007467" />
              <stop offset={0.6} stopColor="#008777" />
              <stop offset={0.65} stopColor="#00a790" />
              <stop offset={0.71} stopColor="#00d2b3" />
              <stop offset={0.75} stopColor="#00f0cc" />
              <stop offset={0.81} stopColor="#00b99f" />
              <stop offset={0.86} stopColor="#00907d" />
              <stop offset={0.9} stopColor="#007769" />
              <stop offset={0.92} stopColor="#006e62" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-5"
              x1={175.86}
              x2={251.14}
              y1={685.27}
              y2={682.14}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#007d6a" stopOpacity={0} />
              <stop offset={0} stopColor="#003a31" stopOpacity={0.11} />
              <stop offset={0.03} stopOpacity={0.2} />
              <stop offset={0.04} stopColor="#001916" stopOpacity={0.32} />
              <stop offset={0.06} stopColor="#002b24" stopOpacity={0.4} />
              <stop offset={0.1} stopColor="#003029" stopOpacity={0.42} />
              <stop offset={0.15} stopColor="#00594e" stopOpacity={0.34} />
              <stop offset={0.22} stopColor="#006e62" stopOpacity={0.3} />
              <stop offset={0.55} stopColor="#00f0cc" stopOpacity={0.5} />
              <stop offset={0.63} stopColor="#00f0cc" stopOpacity={0.48} />
              <stop offset={0.71} stopColor="#00f0cc" stopOpacity={0.43} />
              <stop offset={0.8} stopColor="#00f0cc" stopOpacity={0.35} />
              <stop offset={0.88} stopColor="#00f0cc" stopOpacity={0.23} />
              <stop offset={0.96} stopColor="#00f0cc" stopOpacity={0.08} />
              <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-6"
              x1={183.64}
              x2={247.56}
              y1={697.73}
              y2={662}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#003029" stopOpacity={0} />
              <stop offset={0.45} stopColor="#003029" stopOpacity={0.6} />
              <stop offset={1} stopColor="#003029" stopOpacity={0.4} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-7"
              x1={158.59}
              x2={253.29}
              y1={661.75}
              y2={661.75}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#003029" stopOpacity={0} />
              <stop offset={0.07} stopColor="#00362e" stopOpacity={0.02} />
              <stop offset={0.14} stopColor="#004a3f" stopOpacity={0.08} />
              <stop offset={0.23} stopColor="#006a5a" stopOpacity={0.18} />
              <stop offset={0.32} stopColor="#009680" stopOpacity={0.32} />
              <stop offset={0.41} stopColor="#00cfb0" stopOpacity={0.5} />
              <stop offset={0.45} stopColor="#00f0cc" stopOpacity={0.6} />
              <stop offset={1} stopColor="#003029" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-8"
              x1={89.61}
              x2={229.28}
              y1={688.13}
              y2={548.46}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00f0cc" stopOpacity={0} />
              <stop offset={0.6} stopColor="#00a992" stopOpacity={0} />
              <stop offset={0.7} stopColor="#005952" stopOpacity={0} />
              <stop offset={0.85} stopColor="#0b4847" stopOpacity={0.47} />
              <stop offset={1} stopColor="#18353b" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-9"
              x1={38}
              x2={259}
              y1={609.05}
              y2={609.05}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#18353b" />
              <stop offset={0.04} stopColor="#123d40" />
              <stop offset={0.19} stopColor="#005952" />
              <stop offset={0.2} stopColor="#005e56" stopOpacity={0.96} />
              <stop offset={0.25} stopColor="#008b7b" stopOpacity={0.66} />
              <stop offset={0.32} stopColor="#00b098" stopOpacity={0.42} />
              <stop offset={0.4} stopColor="#00cdaf" stopOpacity={0.23} />
              <stop offset={0.49} stopColor="#00e1c0" stopOpacity={0.1} />
              <stop offset={0.63} stopColor="#00ecc9" stopOpacity={0.02} />
              <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-10"
              x1={225.79}
              x2={208.91}
              y1={689.98}
              y2={660.75}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#003029" />
              <stop offset={0.41} stopColor="#00594c" stopOpacity={0.85} />
              <stop offset={0.9} stopColor="#00d0b1" stopOpacity={0.41} />
              <stop offset={1} stopColor="#00f0cc" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-11"
              x1={200.67}
              x2={232.5}
              y1={671.79}
              y2={671.79}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#006e62" />
              <stop offset={1} stopColor="#003029" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-12"
              x1={118.7}
              x2={181.5}
              y1={563.6}
              y2={563.6}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#006e62" stopOpacity={0.2} />
              <stop offset={0.24} stopColor="#007063" stopOpacity={0.21} />
              <stop offset={0.32} stopColor="#00786a" stopOpacity={0.23} />
              <stop offset={0.39} stopColor="#008675" stopOpacity={0.27} />
              <stop offset={0.43} stopColor="#009a86" stopOpacity={0.34} />
              <stop offset={0.48} stopColor="#00b49b" stopOpacity={0.41} />
              <stop offset={0.51} stopColor="#00d1b2" stopOpacity={0.5} />
              <stop offset={0.54} stopColor="#00b79d" stopOpacity={0.42} />
              <stop offset={0.59} stopColor="#009c87" stopOpacity={0.34} />
              <stop offset={0.64} stopColor="#008776" stopOpacity={0.28} />
              <stop offset={0.7} stopColor="#00786a" stopOpacity={0.23} />
              <stop offset={0.79} stopColor="#007063" stopOpacity={0.21} />
              <stop offset={1} stopColor="#006e62" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-13"
              x1={150.2}
              x2={150.2}
              y1={630.22}
              y2={553.92}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#006e62" stopOpacity={0.5} />
              <stop offset={0.05} stopColor="#087" stopOpacity={0.53} />
              <stop offset={0.16} stopColor="#00cbad" stopOpacity={0.59} />
              <stop offset={0.17} stopColor="#00d1b2" stopOpacity={0.6} />
              <stop offset={0.21} stopColor="#00c7aa" stopOpacity={0.59} />
              <stop offset={0.4} stopColor="#00a08a" stopOpacity={0.55} />
              <stop offset={0.6} stopColor="#008474" stopOpacity={0.52} />
              <stop offset={0.8} stopColor="#007366" stopOpacity={0.51} />
              <stop offset={1} stopColor="#006e62" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-14"
              x1={120.01}
              x2={176.95}
              y1={546.9}
              y2={603.86}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00d1b2" stopOpacity={0.7} />
              <stop offset={0.07} stopColor="#00c1a5" stopOpacity={0.59} />
              <stop offset={0.2} stopColor="#00a890" stopOpacity={0.41} />
              <stop offset={0.34} stopColor="#00937f" stopOpacity={0.26} />
              <stop offset={0.48} stopColor="#008272" stopOpacity={0.15} />
              <stop offset={0.64} stopColor="#007769" stopOpacity={0.06} />
              <stop offset={0.8} stopColor="#007063" stopOpacity={0.02} />
              <stop offset={1} stopColor="#006e62" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-15"
              x1={139.4}
              x2={144.43}
              y1={563.13}
              y2={554.42}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00f0cc" stopOpacity={0.5} />
              <stop offset={0.36} stopColor="#00ecc8" stopOpacity={0.5} />
              <stop offset={0.48} stopColor="#00debd" stopOpacity={0.5} />
              <stop offset={0.54} stopColor="#00d1b2" stopOpacity={0.5} />
              <stop offset={0.64} stopColor="#00d6b6" stopOpacity={0.41} />
              <stop offset={0.84} stopColor="#00e3c1" stopOpacity={0.19} />
              <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-16"
              x1={158.88}
              x2={163.22}
              y1={558.8}
              y2={558.8}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00f0cc" stopOpacity={0.5} />
              <stop offset={0.44} stopColor="#00ecc8" stopOpacity={0.5} />
              <stop offset={0.59} stopColor="#00debd" stopOpacity={0.5} />
              <stop offset={0.67} stopColor="#00d1b2" stopOpacity={0.5} />
              <stop offset={0.8} stopColor="#00d1b2" stopOpacity={0.49} />
              <stop offset={0.86} stopColor="#00d3b4" stopOpacity={0.46} />
              <stop offset={0.9} stopColor="#00d7b7" stopOpacity={0.4} />
              <stop offset={0.93} stopColor="#00dcbb" stopOpacity={0.31} />
              <stop offset={0.96} stopColor="#00e3c1" stopOpacity={0.2} />
              <stop offset={0.99} stopColor="#00ebc8" stopOpacity={0.07} />
              <stop offset={1} stopColor="#00f0cc" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-17"
              x1={136.51}
              x2={164.66}
              y1={688.32}
              y2={628.71}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00d1b2" />
              <stop offset={0.22} stopColor="#00cdaf" />
              <stop offset={0.41} stopColor="#00c2a6" />
              <stop offset={0.6} stopColor="#00af97" />
              <stop offset={0.79} stopColor="#009682" />
              <stop offset={0.97} stopColor="#007467" />
              <stop offset={1} stopColor="#006e62" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-18"
              x1={-66.82}
              x2={-55.58}
              y1={629.9}
              y2={638.83}
              gradientTransform="matrix(-1.16436 .11478 -.11475 1.07645 52.9 -387.88)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00f0cc" stopOpacity={0.1} />
              <stop offset={0.1} stopColor="#00e8c5" stopOpacity={0.26} />
              <stop offset={0.32} stopColor="#00d6b6" stopOpacity={0.68} />
              <stop offset={0.39} stopColor="#00d1b2" stopOpacity={0.8} />
              <stop offset={0.51} stopColor="#00b198" stopOpacity={0.54} />
              <stop offset={0.75} stopColor="#006e62" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="linear-gradient-19"
              x1={194.09}
              x2={218.24}
              y1={816.69}
              y2={832.41}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00f0cc" stopOpacity={0.1} />
              <stop offset={0.14} stopColor="#00e8c5" stopOpacity={0.26} />
              <stop offset={0.43} stopColor="#00d6b6" stopOpacity={0.68} />
              <stop offset={0.52} stopColor="#00d1b2" stopOpacity={0.8} />
              <stop offset={0.68} stopColor="#00b198" stopOpacity={0.54} />
              <stop offset={1} stopColor="#006e62" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              xlinkHref="#linear-gradient-18"
              id="linear-gradient-20"
              x1={201.59}
              x2={232.36}
              y1={806.2}
              y2={826.68}
              gradientTransform="matrix(-1 0 0 1 259.01 -532)"
            />
            <linearGradient
              id="linear-gradient-21"
              x1={206.21}
              x2={206.21}
              y1={613.59}
              y2={608.45}
              gradientTransform="matrix(-.94 -.0036 .0001 1 353.73 -537.68)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#18203b" />
              <stop offset={0.14} stopColor="#106778" />
              <stop offset={0.21} stopColor="#0d8391" />
              <stop offset={0.25} stopColor="#0a9a9d" />
              <stop offset={0.3} stopColor="#07b4ab" />
              <stop offset={0.36} stopColor="#04cab7" />
              <stop offset={0.43} stopColor="#02dbc0" />
              <stop offset={0.52} stopColor="#01e7c7" />
              <stop offset={0.65} stopColor="#00eeca" />
              <stop offset={1} stopColor="#00f0cc" />
            </linearGradient>
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-22"
              x1={206.26}
              x2={206.26}
              y1={609.46}
              y2={604.38}
            />
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-23"
              x1={206.16}
              x2={206.16}
              y1={605.39}
              y2={600.36}
            />
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-24"
              x1={206.16}
              x2={206.16}
              y1={601.36}
              y2={596.38}
            />
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-25"
              x1={206.16}
              x2={206.16}
              y1={597.39}
              y2={592.47}
            />
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-26"
              x1={206.1}
              x2={206.1}
              y1={593.47}
              y2={588.6}
            />
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-27"
              x1={206.16}
              x2={206.16}
              y1={589.61}
              y2={584.79}
            />
            <linearGradient
              xlinkHref="#linear-gradient-21"
              id="linear-gradient-28"
              x1={206.05}
              x2={206.05}
              y1={585.79}
              y2={581.03}
            />
            <linearGradient
              id="linear-gradient-29"
              x1={-996.2}
              x2={-1021.91}
              y1={-1734.36}
              y2={-1734.36}
              gradientTransform="matrix(0 1 .94 .00367 1778.55 1075.07)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} />
              <stop offset={0.06} stopColor="#000403" />
              <stop offset={0.12} stopColor="#00100d" />
              <stop offset={0.18} stopColor="#00241f" />
              <stop offset={0.24} stopColor="#004137" />
              <stop offset={0.3} stopColor="#006657" />
              <stop offset={0.36} stopColor="#00937d" />
              <stop offset={0.42} stopColor="#00c8aa" />
              <stop offset={0.46} stopColor="#00f0cc" />
              <stop offset={0.47} stopColor="#00f0cc" />
              <stop offset={0.58} stopColor="#00f0cc" />
              <stop offset={0.61} stopColor="#00c3a5" />
              <stop offset={0.64} stopColor="#00957f" />
              <stop offset={0.68} stopColor="#006d5d" />
              <stop offset={0.72} stopColor="#004b40" />
              <stop offset={0.76} stopColor="#002f28" />
              <stop offset={0.81} stopColor="#001a16" />
              <stop offset={0.85} stopColor="#000b09" />
              <stop offset={0.91} stopColor="#000202" />
              <stop offset={1} />
            </linearGradient>
            <linearGradient
              xlinkHref="#linear-gradient-29"
              id="linear-gradient-30"
              x1={-996.19}
              x2={-1021.92}
              y1={-1709.36}
              y2={-1709.36}
            />
            <radialGradient
              id="radial-gradient"
              cx={149.53}
              cy={616.65}
              r={111.12}
              fx={149.53}
              fy={616.65}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.26} stopColor="#00635c" />
              <stop offset={0.68} stopColor="#006b62" stopOpacity={0.96} />
              <stop offset={0.83} stopColor="#008a7b" stopOpacity={0.8} />
              <stop offset={0.94} stopColor="#00c0a6" stopOpacity={0.54} />
              <stop offset={1} stopColor="#00f0cc" stopOpacity={0.3} />
            </radialGradient>
            <radialGradient
              id="radial-gradient-2"
              cx={216.8}
              cy={669.56}
              r={15.22}
              fx={216.8}
              fy={669.56}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00f0cc" stopOpacity={0} />
              <stop offset={0.58} stopColor="#00debd" stopOpacity={0.02} />
              <stop offset={0.79} stopColor="#009f88" stopOpacity={0.1} />
              <stop offset={0.9} stopColor="#005448" stopOpacity={0.2} />
              <stop offset={0.95} stopColor="#005448" stopOpacity={0.21} />
              <stop offset={0.96} stopColor="#00574a" stopOpacity={0.26} />
              <stop offset={0.97} stopColor="#005b4e" stopOpacity={0.35} />
              <stop offset={0.98} stopColor="#006253" stopOpacity={0.48} />
              <stop offset={0.99} stopColor="#006a5a" stopOpacity={0.64} />
              <stop offset={1} stopColor="#007463" stopOpacity={0.84} />
              <stop offset={1} stopColor="#007d6a" />
            </radialGradient>
            <radialGradient
              id="radial-gradient-3"
              cx={149.43}
              cy={422.41}
              r={28.11}
              fx={149.43}
              fy={422.41}
              gradientTransform="rotate(-180 129.5 274)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00ceae" stopOpacity={0} />
              <stop offset={0.48} stopColor="#00a78f" stopOpacity={0.12} />
              <stop offset={1} stopColor="#006e62" stopOpacity={0.3} />
            </radialGradient>
            <radialGradient
              id="radial-gradient-4"
              cx={149.26}
              cy={654.59}
              r={7.33}
              fx={149.26}
              fy={654.59}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00ceae" stopOpacity={0} />
              <stop offset={0.56} stopColor="#00c8a9" stopOpacity={0.02} />
              <stop offset={0.76} stopColor="#00b49a" stopOpacity={0.08} />
              <stop offset={0.91} stopColor="#00927e" stopOpacity={0.19} />
              <stop offset={1} stopColor="#006e62" stopOpacity={0.3} />
            </radialGradient>
            <radialGradient
              id="radial-gradient-5"
              cx={149.24}
              cy={655.71}
              r={28.28}
              fx={149.24}
              fy={655.71}
              gradientTransform="matrix(-1 0 0 1 259 -532)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.73} stopColor="#00f0cc" stopOpacity={0} />
              <stop offset={0.78} stopColor="#00ebc8" stopOpacity={0.03} />
              <stop offset={0.83} stopColor="#00debd" stopOpacity={0.14} />
              <stop offset={0.88} stopColor="#00c7ab" stopOpacity={0.31} />
              <stop offset={0.93} stopColor="#00a791" stopOpacity={0.55} />
              <stop offset={0.98} stopColor="#007f70" stopOpacity={0.87} />
              <stop offset={1} stopColor="#006e62" />
            </radialGradient>
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-6"
              cx={149.24}
              r={28.28}
              fx={149.24}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-7"
              cx={149.24}
              r={28.28}
              fx={149.24}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-8"
              cx={149.24}
              r={28.28}
              fx={149.24}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-9"
              cx={149.24}
              r={28.28}
              fx={149.24}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-10"
              cx={149.24}
              r={28.28}
              fx={149.24}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-11"
              cx={149.24}
              r={28.28}
              fx={149.24}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-12"
              r={28.28}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-13"
              cx={149.25}
              r={28.27}
              fx={149.25}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-14"
              cx={149.23}
              r={28.28}
              fx={149.23}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-15"
              cx={149.25}
              r={28.29}
              fx={149.25}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-16"
              cx={149.23}
              r={28.29}
              fx={149.23}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-17"
              cx={149.23}
              r={28.28}
              fx={149.23}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-18"
              cx={149.22}
              r={28.29}
              fx={149.22}
            />
            <radialGradient
              xlinkHref="#radial-gradient-5"
              id="radial-gradient-19"
              cx={149.23}
              r={28.28}
              fx={149.23}
            />
            <style>
              {
                ".cls-1{fill:#00f0cc}.cls-1,.cls-37,.cls-38,.cls-46,.cls-58,.cls-60{stroke-width:0}.cls-37{fill:#007d6a}.cls-38{fill:#00d6b6}.cls-46{fill:url(#radial-gradient-5)}.cls-69{opacity:.55}.cls-58{fill:#006e62}.cls-60{fill:#003029}"
              }
            </style>
          </defs>
          <g id="VKB_GLADIATOR_NEXT_EVO_RIGHT">
            <g id="greebles">
              <path
                d="m58.5 268.7 6.3 10.6c.4.7.2 1.6-.5 2l-9.8 6.5-13 9c-.7.5-.9 1.4-.4 2.1l1.5 2.2c.5.7.3 1.6-.4 2.1l-7.8 5.8c-.9.7-1.4 1.7-1.4 2.9v2.1c0 .8.2 1.5.7 2.1l43.4 58.1c.2.3.3.6.3.9v16.5c0 .8-.7 1.5-1.5 1.5h-2.4c-.3 0-.5.1-.8.2l-.7.4c-5.2 3-8.6 8.3-9.3 14.2l-1.1 8.9v65.4c0 1.9.4 3.8 1.1 5.5l3 6.9c1.8 4.1 4.2 8 7.2 11.3l4.1 4.7c.2.3.4.6.4 1V531c0 .3.1.7.3.9l2 2.5c5.6 7 14 11.2 23 11.2h50.5c8.9 0 17.3-4 22.8-10.9l2.2-2.7c.2-.3.3-.6.3-1v-1.3c0-.8.7-1.5 1.5-1.5s1.5-.7 1.5-1.5v-4.8c0-1 .7-1.9 1.7-2.1l25.4-6c7.7-1.8 15.6-2.7 23.5-2.7h9.4c.8 0 1.5.7 1.5 1.5v1c0 .8.7 1.5 1.5 1.5h11.7c1.5 0 2.7-1.2 2.7-2.7v-27.6c0-5.8-2.9-11.3-7.7-14.6l-4.4-3.1c-.6-.4-1-1.1-1.1-1.9l-.3-3.7c-.9-9.8-7.9-18-17.4-20.3l-7.1-1.8c-2.4-.6-4.8-.9-7.3-.9h-2c-.7 0-1.3-.1-2-.4l-7.4-3c-3.1-1.3-6.5-2-9.9-2h-9.6c-.8 0-1.5-.7-1.5-1.5v-99.4l-3.4-116.9-2.2-61.2-.1-6.2c0-2.4.9-4.7 2.5-6.4l3-3.2.1-.1 29.7-25.7 1.9-2.3 1.5-9.9v-.4L210.8 77l-2.2-10.9C205 48 190.7 33.8 172.5 30.3c-2.8-.5-5.7-.8-8.6-.8H64.5c-2.2 0-4.5.2-6.7.5l-4.2.6c-23.1 3.7-37 19.1-39.6 39.3l-.9 7-1.1 8.9c-1.2 9-1.8 18.2-1.8 27.3v40.7c0 .3-.2.5-.5.5h-2v2c0 12.7 8.8 23.6 21.2 26.4l13.9 3c.9.2 1.9.4 2.9.5l17.1 2.3c2.5.3 5 .5 7.5.5h2.8c6.3 0 11.3 5.2 11 11.5L82 243.7c-.1 1.9-.8 3.6-2 5l-2.5 2.5c-.4.5-.9.9-1.5 1.2-.6.4-1.4.9-1.4.9l-14.4 9.3c-2.2 1.4-2.9 4.1-1.7 6.1Z"
                style={{
                  fill: "#003029",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m58.6 268 6.3 10.6c.4.7.2 1.6-.5 2l-9.8 6.5-13 9c-.7.5-.9 1.4-.4 2.1l1.5 2.2c.5.7.3 1.6-.4 2.1l-7.8 5.8c-.9.7-1.4 1.7-1.4 2.9v2.1c0 .8.2 1.5.7 2.1l43.4 58.1c.2.3.3.6.3.9v16.5c0 .8-.7 1.5-1.5 1.5h-2.4c-.3 0-.5.1-.8.2l-.7.4c-5.2 3-8.6 8.3-9.3 14.2l-1.1 8.9v65.4c0 1.9.4 3.8 1.1 5.5l3 6.9c1.8 4.1 4.2 8 7.2 11.3l4.1 4.7c.2.3.4.6.4 1v19.4c0 .3.1.7.3.9l2 2.5c5.6 7 14 11.2 23 11.2h50.5c8.9 0 17.3-4 22.8-10.9l2.2-2.7c.2-.3.3-.6.3-1V529c0-.8.7-1.5 1.5-1.5s1.5-.7 1.5-1.5v-4.8c0-1 .7-1.9 1.7-2.1l25.4-6c7.7-1.8 15.6-2.7 23.5-2.7h9.4c.8 0 1.5.7 1.5 1.5v1c0 .8.7 1.5 1.5 1.5h11.7c1.5 0 2.7-1.2 2.7-2.7V484c0-5.8-2.9-11.3-7.7-14.6l-4.4-3.1c-.6-.4-1-1.1-1.1-1.9l-.3-3.7c-.9-9.8-7.9-18-17.4-20.3l-7.1-1.8c-2.4-.6-4.8-.9-7.3-.9h-2c-.7 0-1.3-.1-2-.4l-7.4-3c-3.1-1.3-6.5-2-9.9-2h-9.6c-.8 0-1.5-.7-1.5-1.5v-99.4l-3.4-116.8-2.2-61.2-.1-6.2c0-2.4.9-4.7 2.5-6.4l3-3.2.1-.1 29.7-25.7 1.9-2.3 1.5-9.9v-.4L211 76.4l-2.2-10.9c-3.6-18.2-17.9-32.4-36.1-35.9-2.8-.5-5.7-.8-8.6-.8H64.7c-2.2 0-4.5.2-6.7.5l-4.2.6c-23.1 3.7-37 19.1-39.6 39.3l-.9 7-1.1 8.9c-1.2 9-1.8 18.2-1.8 27.3V153c0 .3-.2.5-.5.5h-2v2c0 12.7 8.8 23.6 21.2 26.4l13.9 3c.9.2 1.9.4 2.9.5l17.1 2.3c2.5.3 5 .5 7.5.5h2.8c6.3 0 11.3 5.2 11 11.5L81.9 243c-.1 1.9-.8 3.6-2 5l-2.5 2.5c-.4.5-.9.9-1.5 1.2-.6.4-1.4.9-1.4.9l-14.4 9.3c-2 1.4-2.7 4.1-1.5 6.1Z"
                style={{
                  fill: "url(#linear-gradient)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M81.7 172.7c-.4 5.9 5.8 10.8 13.6 10.8h59.5c6.2 0 12-2 16.1-5.5 3.5-3 5.4-6.9 5.3-11l1.7 48.2 3.4 116.9v99.4c0 .8.7 1.5 1.5 1.5h9.6c3.4 0 6.7.7 9.9 2l7.4 3c.6.3 1.3.4 2 .4h2c2.5 0 4.9.3 7.3.9l6.9 1.7c9.5 2.4 16.5 10.5 17.4 20.3l.3 3.7c.1.8.5 1.4 1.1 1.9l4.5 3.1c4.8 3.3 7.7 8.8 7.7 14.6v27.6c0 1.5-1.2 2.7-2.7 2.7h-11.6c-.8 0-1.5-.7-1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-9.4c-7.9 0-15.8.9-23.5 2.7l-25.4 6c-1 .2-1.7 1.1-1.7 2.1v4.8c0 .8-.7 1.5-1.5 1.5s-1.5.7-1.5 1.5v1.3c0 .3-.1.7-.3 1l-2.2 2.7c-5.6 6.9-13.9 10.9-22.8 10.9h-50.5c-9 0-17.5-4.1-23-11.2l-2-2.5c-.2-.3-.3-.6-.3-.9v-19.4c0-.4-.1-.7-.4-1l-4.1-4.7c-3-3.4-5.4-7.2-7.2-11.3l-3-6.9c-.8-1.7-1.1-3.6-1.1-5.5v-65.2l1.1-8.9c.7-5.9 4.1-11.2 9.3-14.2l.7-.4c.2-.1.5-.2.8-.2h2.3c.8 0 1.5-.7 1.5-1.5V375c0-.3-.1-.6-.3-.9L33.7 316c-.5-.6-.7-1.4-.7-2.1v-2.1c0-1.1.5-2.2 1.4-2.9l7.8-5.8c.6-.5.8-1.4.4-2.1l-1.5-2.2c-.5-.7-.3-1.6.4-2.1l13-9 9.8-6.5c.7-.5.9-1.3.5-2l-6.3-10.6c-1.2-2.1-.5-4.7 1.5-6l14.4-9.4s.9-.5 1.4-.9l1.5-1.2 2.5-2.5c1.2-1.4 1.9-3.2 2-5l2.1-43.2c.1-2.9-.8-5.5-2.5-7.5l.3-20.2Z"
                style={{
                  fill: "url(#linear-gradient-2)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M81.7 172.7c-.4 5.9 5.8 10.8 13.6 10.8h59.5c6.2 0 12-2 16.1-5.5 3.5-3 5.4-6.9 5.3-11l-.6-19.6-92.8-1.3-1.1 26.6Z"
                style={{
                  fill: "url(#linear-gradient-3)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  opacity: 0.15,
                }}
              >
                <path
                  d="M129.8 69c-1.5 15.7 11.6 29.5 29.3 29.5 17.7 0 31.1-13.8 29.9-29.5-1.2-14.3-14.3-25.1-29.4-25.1-15.1 0-28.4 10.8-29.8 25.1Z"
                  style={{
                    stroke: "#00f0cc",
                    fill: "#007d6a",
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M132.9 72c-1.3 14.1 10.3 26.6 26.2 26.6s27.8-12.5 26.7-26.6c-1-12.9-12.8-22.6-26.3-22.6s-25.3 9.7-26.6 22.6Z"
                  className="cls-1"
                />
              </g>
              <path
                d="M92.7 89.6h33.9c.9 0 1.6.5 2.1 1.2 5.3 9.4 14.9 15.5 25.6 16.4l8.1.1c2.4 0 4.7 1.2 6.2 3.2l4.7 6.6c1.2 1.7 3.1 2.7 5.2 2.7h23.6l8.1-7.6 1.5-1.8 2-9.9h-5.6c-.6 0-1.1.2-1.5.6l-6.2 8.8c-1.8 1.8-4.3 2.7-6.9 2.7h-15.9c-1.7 0-3.2-.8-4.2-2.2l-4.8-6.6a7.87 7.87 0 0 0-6.4-3.3h-8.1c-10.7-1.7-19.9-8.3-25-17.8l-.3-.5c-.5-.9-1.4-1.4-2.4-1.4H91c-1.8 0-3.2-1.4-3.2-3.2v-.2C87.8 60.6 73.7 47 56.4 47S25 60.6 25 77.4v8.3c0 1.6-1.3 2.8-2.9 2.8H9.9v4.4h15.8c1.6 0 2.9-1.3 2.9-2.8v-9.5c0-14.8 12.6-26.9 28.2-26.9S85 65.7 85 80.6v4.2c0 2.6 2.1 4.8 4.8 4.8h2.9Z"
                style={{
                  fill: "url(#linear-gradient-4)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M10.1 113v38.6c0 1.4-1.1 2.5-2.4 2.5v2c0 12.7 8.5 23.6 20.4 26.4l13.4 3c.9.2 1.8.4 2.7.5l16.4 2.3c2.4.3 4.8.5 7.3.5h2.7c6.1 0 11.1-2.3 10.9 4l1.6-41.8-20.2-25.1-17.7-10.8-23.9-4-11.2 1.9Z"
                style={{
                  fill: "url(#linear-gradient-5)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M10.7 151.5v-39.7h16l9.6.4c12.3.2 24.1 5.8 32.5 14.9l4.4 4.8c.3 2.6.9 5.1 1.7 7.4v.1l.9 2.1q0 .1.1.1c.3.7.7 1.4 1.1 2 0 .1.1.1.1.2.4.6.8 1.3 1.2 1.9 0 .1.1.1.1.2.4.6.9 1.2 1.3 1.8 0 .1.1.1.1.1.5.6.9 1.1 1.5 1.7l.1.1 1.6 1.6.1.1c.2.2.5.4.8.7l.1 36.9c0 .4-.5.5-.7.3-5.1-5.9-8.8-5.7-8.8-5.7h-3.7c-2.4 0-4.8-.2-7.2-.5l-16.4-2.2c-.9-.1-1.8-.3-2.7-.5l-13.3-2.9c-11.9-2.6-20.4-13.1-20.4-25.1v-.8h-.1Z"
                style={{
                  fill: "url(#linear-gradient-6)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M5.6 109.1h20.5c20.8.6 39.8 11.7 51.3 29 5.1 7.7 13.7 12.3 22.9 12.3"
                style={{
                  fill: "none",
                  strokeWidth: 7,
                  stroke: "#006e62",
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M5.6 109.1h20.5c20.8.6 39.8 11.7 51.3 29 5.1 7.7 13.7 12.3 22.9 12.3"
                style={{
                  stroke: "url(#linear-gradient-7)",
                  fill: "none",
                  strokeWidth: 7,
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="m4.2 67.2 11.3-29.8 15.1-15.8 21.5-6.8h115.4l27.9 10.6 17.3 23 3.8 37.3v22.6l-1.9-3-.5-2.5c0-.2-1-2.7-1-2.8l-3.3-22.8-2.2-10.9C204 48.2 189.8 34 171.5 30.5c-2.8-.5-5.7-.8-8.6-.8H63.5c-2.2 0-4.5.2-6.7.5l-4.2.6c-20.2 3-36 19.1-38.6 39.3l-.9 7L12 86c-1.2 9-1.8 18.2-1.8 27.3V153c0 .8-.6 1.4-1.4 1.5-1.7-.9-3-4.7-4.7-5-3.8-.7.1-82.3.1-82.3Z"
                style={{
                  fill: "#005e4b",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m4.2 67.2 11.3-29.8 15.1-15.8 21.5-6.8h115.4l27.9 10.6 17.3 23 3.8 37.3v22.6l-1.9-3-.5-2.5c0-.2-1-2.7-1-2.8l-3.3-22.8-2.2-10.9C204 48.2 189.8 34 171.5 30.5c-2.8-.5-5.7-.8-8.6-.8H63.5c-2.2 0-4.5.2-6.7.5l-4.2.6c-20.2 3-36 19.1-38.6 39.3l-.9 7L12 86c-1.2 9-1.8 18.2-1.8 27.3V153c0 .8-.6 1.4-1.4 1.5-1.7-.9-3-4.7-4.7-5-3.8-.7.1-82.3.1-82.3Z"
                style={{
                  fill: "url(#radial-gradient)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m138.6 1.3 8.5 8.5c.6.6 1.5 1 2.4 1 3.1 0 10.6.1 13.6 0 24.9-.6 47.6 15.6 54.7 39.5 1.9 5.3 2.5 11.2 2.5 16.8.3 10.7.5 21.3.7 32v.7l-3 7.5c-.2.5-.6.9-1.1 1l-5 1.8c.6-4.1 1.1-7.5 1.8-11.7v.7c-.3-10.7-.7-21.3-1-32 0-5.3-.6-10.7-2.4-15.7-5.7-18.9-23.3-33.4-43.1-34.8-5.1-.4-18.8-.1-18.8-.1H72.2s-10.7-.2-15.8.1c-19.8 1.5-37.4 16-43.1 34.8-1.7 5-5.4 23.8-5.4 29.1v69c0 1.7 0 3.4 1.2 4.6H6.3c-3.3 0-6-2.7-6-6v-27.6L0 80.8C0 72.7 3.6 55.3 5.5 50c7.1-23.9 29.8-40.2 54.7-39.5 2.9.1 8.1 0 10.6 0 .9 0 1.8-.4 2.4-1L81.8 1c.6-.6 1.5-1 2.4-1l52 .3c.9 0 1.8.4 2.4 1Z"
                className="cls-1"
              />
              <path
                d="m138.6 1.3 8.5 8.5c.6.6 1.5 1 2.4 1 3.1 0 10.6.1 13.6 0 24.9-.6 47.6 15.6 54.7 39.5 1.9 5.3 2.5 11.2 2.5 16.8.3 10.7.5 21.3.7 32v.7l-3 7.5c-.2.5-.6.9-1.1 1l-5 1.8c.6-4.1 1.1-7.5 1.8-11.7v.7c-.3-10.7-.7-21.3-1-32 0-5.3-.6-10.7-2.4-15.7-5.7-18.9-23.3-33.4-43.1-34.8-5.1-.4-18.8-.1-18.8-.1H72.2s-10.7-.2-15.8.1c-19.8 1.5-37.4 16-43.1 34.8-1.7 5-5.4 23.8-5.4 29.1v69c0 1.7 0 3.4 1.2 4.6H6.3c-3.3 0-6-2.7-6-6v-27.6L0 80.8C0 72.7 3.6 55.3 5.5 50c7.1-23.9 29.8-40.2 54.7-39.5 2.9.1 8.1 0 10.6 0 .9 0 1.8-.4 2.4-1L81.8 1c.6-.6 1.5-1 2.4-1l52 .3c.9 0 1.8.4 2.4 1Z"
                style={{
                  fill: "url(#linear-gradient-8)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m138.6 1.3 8.5 8.5c.6.6 1.5 1 2.4 1 3.1 0 10.6.1 13.6 0 24.9-.6 47.6 15.6 54.7 39.5 1.9 5.3 2.5 11.2 2.5 16.8.3 10.7.5 21.3.7 32v.7l-3 7.5c-.2.5-.6.9-1.1 1l-5 1.8c.6-4.1 1.1-7.5 1.8-11.7v.7c-.3-10.7-.7-21.3-1-32 0-5.3-.6-10.7-2.4-15.7-5.7-18.9-23.3-33.4-43.1-34.8-5.1-.4-18.8-.1-18.8-.1H72.2s-10.7-.2-15.8.1c-19.8 1.5-37.4 16-43.1 34.8-1.7 5-5.4 23.8-5.4 29.1v69c0 1.7 0 3.4 1.2 4.6H6.3c-3.3 0-6-2.7-6-6v-27.6L0 80.8C0 72.7 3.6 55.3 5.5 50c7.1-23.9 29.8-40.2 54.7-39.5 2.9.1 8.1 0 10.6 0 .9 0 1.8-.4 2.4-1L81.8 1c.6-.6 1.5-1 2.4-1l52 .3c.9 0 1.8.4 2.4 1Z"
                style={{
                  fill: "url(#linear-gradient-9)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M59.8 146.1v-5.4c0-9.9-9.3-12.2-20.7-12.2-10.4 0-14.1 3.9-14.1 11.7v5.9c0 8 9.1 14.4 17.5 14.4 10.5-.1 17.2-9.8 17.3-14.4Z"
                className="cls-60"
              />
              <path
                d="M59.8 146.1v-5.4c0-9.9-9.3-12.2-20.7-12.2-10.4 0-14.1 3.9-14.1 11.7v5.9c0 8 9.1 14.4 17.5 14.4 10.5-.1 17.2-9.8 17.3-14.4Z"
                style={{
                  fill: "url(#linear-gradient-10)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M26.5 140.1c-.4-14.6 18.4-21.9 28-10.8 9.6 11.1-.4 28.7-14.9 26.1-7.3-1.3-12.9-7.8-13.1-15.3Z"
                className="cls-60"
              />
              <path
                d="M26.5 140.1c-.4-14.6 18.4-21.9 28-10.8 9.6 11.1-.4 28.7-14.9 26.1-7.3-1.3-12.9-7.8-13.1-15.3Z"
                style={{
                  fill: "url(#linear-gradient-11)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M25 140.2c-.4-16.1 20.1-24.1 30.7-11.9s-.4 31.6-16.3 28.7c-8.1-1.5-14.2-8.6-14.4-16.8Zm1.5-.5c0 14.7 18.9 21.6 28.3 10.2 9.4-11.4-1.1-28.8-15.5-25.8-7.4 1.5-12.8 8.1-12.8 15.6Z"
                className="cls-37"
              />
              <path
                d="M77.5 19.7v9.7l3.2 7.3c.4.9 1.1 1.5 2.1 1.8l19.5 5.1 13.2-.1 19.5-5.1c.9-.2 1.7-.9 2.1-1.8l3.2-7.3v-9.7l-62.8.1Z"
                className="cls-60"
              />
              <path
                d="M77.5 19.7v9.7l3.2 7.3c.4.9 1.1 1.5 2.1 1.8l19.5 5.1 13.2-.1 19.5-5.1c.9-.2 1.7-.9 2.1-1.8l3.2-7.3v-9.7l-62.8.1Z"
                style={{
                  fill: "url(#linear-gradient-12)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m114.9 95.9.5-27.4V38.8c0-1.3.9-2.4 2.1-2.7l16.4-4.3c1-.2 1.8-.9 2.1-1.9l4.2-10.3H77.4l4.1 10.3c.4.9 1.2 1.6 2.1 1.9l16.4 4.3c1.2.3 2.1 1.5 2.1 2.7v29.7l.5 27.4h12.3Z"
                className="cls-37"
              />
              <path
                d="m114.9 95.9.5-27.4V38.8c0-1.3.9-2.4 2.1-2.7l16.4-4.3c1-.2 1.8-.9 2.1-1.9l4.2-10.3H77.4l4.1 10.3c.4.9 1.2 1.6 2.1 1.9l16.4 4.3c1.2.3 2.1 1.5 2.1 2.7v29.7l.5 27.4h12.3Z"
                style={{
                  fill: "url(#linear-gradient-13)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m114.9 95.9.5-27.4V38.8c0-1.3.9-2.4 2.1-2.7l16.4-4.3c1-.2 1.8-.9 2.1-1.9l4.2-10.3H77.4l4.1 10.3c.4.9 1.2 1.6 2.1 1.9l16.4 4.3c1.2.3 2.1 1.5 2.1 2.7v29.7l.5 27.4h12.3Z"
                style={{
                  fill: "url(#linear-gradient-14)",
                  strokeWidth: 0,
                }}
              />
              <g
                style={{
                  opacity: 0.61,
                }}
              >
                <path
                  d="M123.2 24.8H111c-1.1 0-2 .9-2 2s.9 2 2 2h12.2c1.1 0 2-.9 2-2s-.9-2-2-2Z"
                  style={{
                    fill: "url(#linear-gradient-15)",
                    strokeWidth: 0,
                  }}
                />
                <circle
                  cx={98}
                  cy={26.8}
                  r={2.2}
                  style={{
                    fill: "url(#linear-gradient-16)",
                    strokeWidth: 0,
                  }}
                />
              </g>
            </g>
            <g id="input4_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"
              className=" selected-input corner-test" onClick={() => {
                setSelectedViewerInput('redButton');
                setEditorPanelTitle('Red Button');
                console.log("redButton")
              }}
            >
              <path
                d="M26.8 137.5c.1-14.6 18.8-19.8 27.3-9.6 9.6 11.6-2.2 27-15 24.4-6.7-1.4-12.3-7.3-12.3-14.8Z"
                className="cls-1"
              />
              <path
                d="M26.8 137.5c.1-14.6 18.8-19.8 27.3-9.6 9.6 11.6-2.2 27-15 24.4-6.7-1.4-12.3-7.3-12.3-14.8Z"
                style={{
                  fill: "url(#radial-gradient-2)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g id="input3_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"
            className="selected-input corner-test" onClick={() => {
              setSelectedViewerInput('circleSwitch');
              setEditorPanelTitle('Circle Stick');

            }}
            >
              <g id="socket">
                <path
                  d="M108.8 137.1s32 13.9 35.4-3.4c-.3 6.5-2.9 13.2-8.4 19.2-19 20.7-58 10.5-61-17.8 2.8 13.3 34 2 34 2Z"
                  className="cls-58"
                />
                <path
                  d="M74.1 128.8c0-31.8 42.8-43.5 62.6-21 21.9 24.9-4.5 59.2-34.4 53.5-15.5-3-28.2-16.3-28.2-32.5Z"
                  style={{
                    fill: "#002923",
                    strokeWidth: 0,
                  }}
                />
                <ellipse
                  cx={109.4}
                  cy={131.9}
                  className="cls-58"
                  rx={31.1}
                  ry={29.8}
                />
                <path
                  d="M109.8 97.1c10.4 0 19.7 4 26.1 11.3 8.1 9.3 10 20.9 5.1 31.8-5.6 12.4-18.5 20.7-32.1 20.7-2.2 0-4.4-.2-6.5-.6-7.5-1.5-14.4-5.4-19.4-11-5.1-5.8-8-13.1-8-20.5 0-11.8 5.9-19.2 10.8-23.3 6.4-5.3 15.2-8.4 24-8.4m.1-1c-18 0-35.8 12.2-35.8 32.8 0 16.1 12.7 29.4 28.2 32.4 2.3.4 4.5.6 6.7.6 26.9 0 48-31.1 27.7-54.1-7-8-16.9-11.7-26.8-11.7Z"
                  style={{
                    fill: "url(#linear-gradient-17)",
                    strokeWidth: 0,
                  }}
                />
              </g>
              <g id="base_face">
                <g id="base">
                  <path
                    id="shadow"
                    d="M82.1 126.5c0 25.5 33.1 37.5 49.2 17.4s-2.2-49.8-27.2-44.6c-12.7 2.7-21.9 14.2-22 27.2Z"
                    className="cls-37"
                  />
                  <path
                    id="face"
                    d="M82 125.5c-.8-25.2 31-38.5 48.2-19.8s.4 51-25.4 46.3c-12.7-2.3-22.3-13.6-22.8-26.5Z"
                    style={{
                      fill: "#00c4a7",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <path
                  id="shadow-2"
                  d="M82.1 124.4c0-2 .2-4.1.6-6 4.7-20.4 32-29.5 47.5-12.7 17.1 18.7.4 51-25.4 46.3-10.9-2-19.4-10.5-22-20.9-.4-2.2-.7-4.4-.7-6.7Z"
                  style={{
                    fill: "url(#radial-gradient-3)",
                    strokeWidth: 0,
                  }}
                />
              </g>
              <g id="hat">
                <g id="base-2">
                  <path
                    d="M102.4 124.5c0 6.7 8.7 9.8 13 4.7s-.5-13.2-7.1-11.8c-3.4.6-5.9 3.7-5.9 7.1Z"
                    className="cls-37"
                  />
                  <path
                    d="M102.4 122.7c-.2-6.8 8.5-10.1 12.9-5s-.2 13.2-6.9 12c-3.3-.5-5.9-3.5-6-7Z"
                    className="cls-1"
                  />
                  <path
                    d="M102.4 122.7c-.2-6.8 8.5-10.1 12.9-5s-.2 13.2-6.9 12c-3.3-.5-5.9-3.5-6-7Z"
                    style={{
                      fill: "url(#radial-gradient-4)",
                      strokeWidth: 0,
                    }}
                  />
                </g>
                <g id="right">
                  <path
                    d="M99.6 118.3c-2.4 3.8-2.5 8.7-.3 12.5v-1.9c-2.3-3.9-2.1-8.8.3-12.6v2Z"
                    className="cls-37"
                  />
                  <path
                    d="m86.2 110.1 13.4 8.2v-2l-13.5-8.2.1 2zM82.1 124.7c0 5 1.3 10 3.9 14.3l13.3-8.1c-2.2-3.9-2.1-8.8.3-12.5l-13.4-8.2c-2.7 4.3-4.1 9.4-4.1 14.5Z"
                    className="cls-37"
                  />
                  <path
                    d="M82 123.2c-.1-5.3 1.3-10.6 4.1-15.2l13.5 8.3c-2.4 3.8-2.5 8.7-.3 12.6L86 137.1c-2.6-4.1-3.9-9-4-13.9Z"
                    className="cls-1"
                  />
                </g>
                <g id="left">
                  <path
                    d="m120.2 118.7-.2-.3v-2c2.4 3.8 2.5 8.7.3 12.6v1.9c2.1-3.8 2.1-8.5-.1-12.2Z"
                    className="cls-37"
                  />
                  <path
                    d="m133.3 110.1-13.4 8.2c2.4 3.8 2.5 8.7.3 12.5l13.3 8.1c5.3-8.6 5.2-20.2-.2-28.8Z"
                    className="cls-37"
                  />
                  <path
                    d="m120 116.3 13.4-8.2c5.3 8.7 5.5 20.2.2 29l-13.3-8.2c2.2-3.9 2.1-8.8-.3-12.6q0 .1 0 0Z"
                    className="cls-1"
                  />
                </g>
                <g id="down">
                  <path
                    d="m95.6 148.7-.3-.2-.1-1.9c8.8 5.4 20.2 5.4 29 0l-.1 1.9c-8.5 5.3-19.7 5.4-28.5.2Z"
                    className="cls-37"
                  />
                  <path
                    d="m103.3 135.4-8 13c8.8 5.4 20.1 5.4 28.9 0l-8-13c-3.9 2.5-9 2.5-12.9 0Z"
                    className="cls-37"
                  />
                  <path
                    d="m95.3 146.6 8.1-13.1c3.9 2.4 9 2.4 12.9 0l8.1 13.1c-8.9 5.4-20.3 5.4-29.1 0Z"
                    className="cls-1"
                  />
                </g>
                <g id="up">
                  <path
                    d="m124.2 101-8.3 13.4v-1.9l8.4-13.5-.1 2z"
                    className="cls-37"
                  />
                  <path
                    d="M95.3 101c8.8-5.4 20.1-5.4 28.9 0l.1-2c-8.8-5.4-20.2-5.4-29 0v2ZM104 114.3l-.3.2v-2c3.8-2.2 8.6-2.2 12.3 0v2c-3.7-2.2-8.3-2.3-12-.2Z"
                    className="cls-37"
                  />
                  <path
                    d="M103.6 114.4 95.3 101v-2l8.3 13.5v1.9z"
                    className="cls-37"
                  />
                  <path
                    d="m95.3 101 8.3 13.4c3.8-2.2 8.5-2.2 12.3 0l8.3-13.4c-8.8-5.4-20.1-5.3-28.9 0Z"
                    className="cls-37"
                  />
                  <path
                    d="M103.6 112.5 95.3 99c8.8-5.4 20.2-5.4 29 0l-8.3 13.5c-3.8-2.3-8.6-2.3-12.4 0Z"
                    className="cls-1"
                  />
                </g>
                <g
                  id="shadow-3"
                  style={{
                    opacity: 0.6,
                  }}
                >
                  <g id="right-shadow">
                    <path
                      d="M99.3 130.9 86 139v-1.9l13.3-8.2v2z"
                      className="cls-46"
                    />
                    <path
                      d="M99.6 118.3c-2.4 3.8-2.5 8.7-.3 12.5v-1.9c-2.3-3.9-2.1-8.8.3-12.6v2Z"
                      style={{
                        fill: "url(#radial-gradient-6)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m86.2 110.1 13.4 8.2v-2l-13.5-8.2.1 2z"
                      className="cls-46"
                    />
                    <path
                      d="M82.1 125.2c-.1-5.3 1.3-10.6 4.1-15.1l-.1-2c-5.4 8.7-5.5 20.3-.1 29l.1 1.9c-2.6-4.1-3.9-8.9-4-13.8Z"
                      style={{
                        fill: "url(#radial-gradient-7)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="M82.1 124.7c0 5 1.3 10 3.9 14.3l13.3-8.1c-2.2-3.9-2.1-8.8.3-12.5l-13.4-8.2c-2.7 4.3-4.1 9.4-4.1 14.5Z"
                      className="cls-46"
                    />
                    <path
                      d="M82 123.2c-.1-5.3 1.3-10.6 4.1-15.2l13.5 8.3c-2.4 3.8-2.5 8.7-.3 12.6L86 137.1c-2.6-4.1-3.9-9-4-13.9Z"
                      className="cls-46"
                    />
                  </g>
                  <g id="left-shadow">
                    <path
                      d="m133.5 139-13.3-8.1.1-2 13.3 8.2-.1 1.9z"
                      style={{
                        fill: "url(#radial-gradient-8)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="M133.3 110.1c5.3 8.7 5.5 20.2.2 28.9l.1-1.9c5.3-8.8 5.2-20.3-.2-29l-.1 2Z"
                      style={{
                        fill: "url(#radial-gradient-9)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m120.2 118.7-.2-.3v-2c2.4 3.8 2.5 8.7.3 12.6v1.9c2.1-3.8 2.1-8.5-.1-12.2Z"
                      style={{
                        fill: "url(#radial-gradient-10)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m120 118.3 13.3-8.2.1-2-13.4 8.2v2z"
                      className="cls-46"
                    />
                    <path
                      d="m133.3 110.1-13.4 8.2c2.4 3.8 2.5 8.7.3 12.5l13.3 8.1c5.3-8.6 5.2-20.2-.2-28.8Z"
                      style={{
                        fill: "url(#radial-gradient-11)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m120 116.3 13.4-8.2c5.3 8.7 5.5 20.2.2 29l-13.3-8.2c2.2-3.9 2.1-8.8-.3-12.6q0 .1 0 0Z"
                      style={{
                        fill: "url(#radial-gradient-12)",
                        strokeWidth: 0,
                      }}
                    />
                  </g>
                  <g id="down-shadow">
                    <path
                      d="m116.2 135.4 8 13.1.1-1.9-8.1-13.1v1.9z"
                      className="cls-46"
                    />
                    <path
                      d="M103.3 135.4c3.9 2.4 9 2.4 12.9 0v-1.9c-3.9 2.4-9 2.4-12.9 0v1.9Z"
                      style={{
                        fill: "url(#radial-gradient-13)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m95.6 148.7-.3-.2-.1-1.9c8.8 5.4 20.2 5.4 29 0l-.1 1.9c-8.5 5.3-19.7 5.4-28.5.2Z"
                      style={{
                        fill: "url(#radial-gradient-14)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m95.3 148.5 8-13.1v-1.9l-8 13.1v1.9z"
                      className="cls-46"
                    />
                    <path
                      d="m103.3 135.4-8 13c8.8 5.4 20.1 5.4 28.9 0l-8-13c-3.9 2.5-9 2.5-12.9 0Z"
                      style={{
                        fill: "url(#radial-gradient-15)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m95.3 146.6 8.1-13.1c3.9 2.4 9 2.4 12.9 0l8.1 13.1c-8.9 5.4-20.3 5.4-29.1 0Z"
                      style={{
                        fill: "url(#radial-gradient-16)",
                        strokeWidth: 0,
                      }}
                    />
                  </g>
                  <g id="up-shadow">
                    <path
                      d="m124.2 101-8.3 13.4v-1.9l8.4-13.5-.1 2z"
                      className="cls-46"
                    />
                    <path
                      d="M95.3 101c8.8-5.4 20.1-5.4 28.9 0l.1-2c-8.8-5.4-20.2-5.4-29 0v2Z"
                      style={{
                        fill: "url(#radial-gradient-17)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="m104 114.3-.3.2v-2c3.8-2.2 8.6-2.2 12.3 0v2c-3.7-2.2-8.3-2.3-12-.2ZM103.6 114.4 95.3 101v-2l8.3 13.5v1.9z"
                      className="cls-46"
                    />
                    <path
                      d="m95.3 101 8.3 13.4c3.8-2.2 8.5-2.2 12.3 0l8.3-13.4c-8.8-5.4-20.1-5.3-28.9 0Z"
                      style={{
                        fill: "url(#radial-gradient-18)",
                        strokeWidth: 0,
                      }}
                    />
                    <path
                      d="M103.6 112.5 95.3 99c8.8-5.4 20.2-5.4 29 0l-8.3 13.5c-3.8-2.3-8.6-2.3-12.4 0Z"
                      style={{
                        fill: "url(#radial-gradient-19)",
                        strokeWidth: 0,
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="input5_Device_VKB_GLADIATOR_NXT_EVO_RIGHT">
              <path
                d="m44.294 284.062 7.72-5.365 8.16 11.743-7.718 5.365z"
                className="cls-58"
              />
              <path
                d="m60.2 290.4-8.1-11.7-7.7 5.4 8.1 11.7 7.7-5.4z"
                style={{
                  fill: "url(#linear-gradient-18)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M42.3 303.1c.6-.5.8-1.4.4-2.1l-1.5-2.2c-.5-.7-.3-1.6.4-2.1l13-9 10.8-6.9c.7-.5 1.6-.3 2.1.4l1.4 2.2c.1.1.1.2.2.2.4.5.4 1.2-.1 1.5l-26.7 18Z"
                className="cls-60"
              />
              <path
                d="M42.3 303.1c.6-.5.8-1.4.4-2.1l-1.5-2.2c-.5-.7-.3-1.6.4-2.1l13-9 10.8-6.9c.7-.5 1.6-.3 2.1.4l1.4 2.2c.1.1.1.2.2.2.4.5.4 1.2-.1 1.5l-26.7 18Z"
                style={{
                  fill: "url(#linear-gradient-19)",
                  strokeWidth: 0,
                }}
              />
              <path
                d="m61.4 276.2-4-6.1c-.7-1-2-1.3-3.1-.7l-19.7 12.7c-1 .7-1.3 2-.7 3.1l4 6.1c.7 1 2 1.3 3.1.7l19.7-12.7c1-.8 1.3-2.1.7-3.1Z"
                className="cls-58"
              />
              <path
                d="m61.4 276.2-4-6.1c-.7-1-2-1.3-3.1-.7l-19.7 12.7c-1 .7-1.3 2-.7 3.1l4 6.1c.7 1 2 1.3 3.1.7l19.7-12.7c1-.8 1.3-2.1.7-3.1Z"
                style={{
                  fill: "url(#linear-gradient-20)",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g id="input2_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"
              lassName="selected-input corner-test" onClick={() => {
                setSelectedViewerInput('hatSwitch');
                setEditorPanelTitle('Hat Stick');

                console.log("setSelectedViewerInput Input 1")
              }}
            >
              <path
                d="M46.4 45.2h18.9c1.4 0 2.8.5 4 1.4l5.4 4.3c1.5 1.2 2.4 3 2.5 4.9l.7 20c.1 2.1-.8 4-2.2 5.3l-5.4 4.8c-1.2 1-2.6 1.6-4.2 1.6H45.9c-1.5 0-3-.6-4.2-1.6l-5.4-4.8c-1.5-1.3-2.3-3.3-2.2-5.3l.7-20c.1-1.9 1-3.7 2.5-4.9l5.4-4.3c.8-.9 2.2-1.4 3.7-1.4Z"
                className="cls-1"
              />
              <path
                d="M46.9 48.1h17.8c.8 0 1.5.3 2.1.8l5.9 4.8c.8.7 1.3 1.6 1.3 2.7l.5 19.2c0 1.1-.4 2.2-1.2 2.9l-6 5.3c-.6.6-1.4.8-2.2.8H46.3c-.8 0-1.6-.3-2.2-.8l-6-5.3c-.8-.7-1.2-1.8-1.2-2.9l.5-19.2c0-1 .5-2 1.3-2.7l5.9-4.8c.8-.5 1.5-.8 2.3-.8Z"
                style={{
                  strokeMiterlimit: 10,
                  fill: "#00b499",
                  stroke: "#00b499",
                  strokeWidth: ".5px",
                }}
              />
              <path
                d="M47.1 50.4h17.5l7 5.7.5 19.5-7.1 6.2H46.7l-7.1-6.2.4-19.5 7.1-5.7z"
                style={{
                  fill: "#007866",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M48.7 53.2H63l5.7 4.7.4 15.9-5.8 5H48.4l-5.8-5 .3-15.9 5.8-4.7z"
                style={{
                  fill: "#005c52",
                  strokeWidth: 0,
                }}
              />
              <path
                d="M51.3 57h9.6l3.8 3.2.2 10.6-3.9 3.4h-9.9l-3.8-3.4.1-10.6 3.9-3.2z"
                style={{
                  fill: "#00332c",
                  strokeWidth: 0,
                }}
              />
            </g>
            <g id="input1_Device_VKB_GLADIATOR_NXT_EVO_RIGHT"
              className=" selected-input corner-test" onClick={() => {
                setSelectedViewerInput('pillSwitch');
                setEditorPanelTitle('Pill Switch');
                console.log("pillSwitch")
              }}
            >
              <path
                d="m153.1 81.5 13.7.1c5.6 0 10.1-5.3 9.9-11.6l-.6-21c-.2-5.8-4.6-10.5-9.8-10.5h-12.8c-5.2 0-9.6 4.6-9.8 10.4l-.6 21c-.1 6.3 4.4 11.6 10 11.6Z"
                style={{
                  fill: "#00f0cc",
                  strokeWidth: 0,
                }}
              />
              <g className="cls-69">
                <path
                  d="M169.1 75.2c.3 0 .6-.1.8-.4.3-.3.4-.6.4-1v-2.4c0-.8-.6-1.4-1.3-1.4h-18.1c-.7 0-1.3.6-1.3 1.3v2.4c0 .4.1.8.4 1 .2.2.5.4.8.4l18.3.1Z"
                  className="cls-38"
                />
                <path
                  d="M169.1 75.2c.3 0 .6-.1.8-.4.3-.3.4-.6.4-1v-2.4c0-.8-.6-1.4-1.3-1.4h-18.1c-.7 0-1.3.6-1.3 1.3v2.4c0 .4.1.8.4 1 .2.2.5.4.8.4l18.3.1Z"
                  style={{
                    fill: "url(#linear-gradient-21)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m150.9 70.5 18.2.1c.5 0 .8.4.8.9v2.4c0 .5-.4.9-.8.9l-18.2-.1c-.5 0-.8-.4-.8-.9v-2.4c0-.5.4-.9.8-.9m0-1c-.9 0-1.7.8-1.7 1.8v2.4c-.1.5.2 1 .5 1.4.3.3.8.5 1.2.5l18.2.1c.4 0 .9-.2 1.2-.5.3-.4.5-.9.5-1.4v-2.4c0-1-.8-1.8-1.8-1.8l-18.1-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M169 71.1c.3 0 .6-.1.8-.4.2-.3.4-.6.4-1v-2.4c0-.7-.6-1.3-1.3-1.3l-18-.1c-.7 0-1.3.6-1.3 1.3v2.4c0 .4.1.8.4 1 .2.2.5.4.8.4l18.2.1Z"
                  className="cls-38"
                />
                <path
                  d="M169 71.1c.3 0 .6-.1.8-.4.2-.3.4-.6.4-1v-2.4c0-.7-.6-1.3-1.3-1.3l-18-.1c-.7 0-1.3.6-1.3 1.3v2.4c0 .4.1.8.4 1 .2.2.5.4.8.4l18.2.1Z"
                  style={{
                    fill: "url(#linear-gradient-22)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="M151 66.4h17.9c.5 0 .8.4.8.9v2.4c.1.5-.3.9-.7.9l-18.1-.1c-.4 0-.7-.4-.7-.9v-2.4c0-.4.4-.8.8-.8m0-1c-1 0-1.8.8-1.8 1.8v2.4c0 .6.2 1.1.5 1.4.3.3.8.5 1.2.5l18.1.1c.4 0 .9-.2 1.2-.5.3-.4.5-.9.5-1.4v-2.4c-.1-1-.9-1.8-1.8-1.8l-17.9-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M169 67c.3 0 .6-.1.8-.4.2-.3.4-.6.4-1v-2.3c0-.7-.6-1.3-1.3-1.3l-17.8-.1c-.7 0-1.2.6-1.3 1.3v2.3c0 .4.1.7.4 1 .2.2.5.4.8.4l18 .1Z"
                  className="cls-38"
                />
                <path
                  d="M169 67c.3 0 .6-.1.8-.4.2-.3.4-.6.4-1v-2.3c0-.7-.6-1.3-1.3-1.3l-17.8-.1c-.7 0-1.2.6-1.3 1.3v2.3c0 .4.1.7.4 1 .2.2.5.4.8.4l18 .1Z"
                  style={{
                    fill: "url(#linear-gradient-23)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m151.1 62.4 17.8.1c.5 0 .8.3.8.8v2.3c0 .4-.3.8-.7.8l-18-.1c-.4 0-.7-.3-.7-.8v-2.3c0-.4.4-.8.8-.8m0-1c-1 0-1.8.8-1.8 1.6v2.3c0 .6.2 1.1.5 1.4.3.3.8.5 1.2.5l18 .1c.4 0 .9-.2 1.2-.5s.5-.8.5-1.3v-2.3c-.1-1-.9-1.8-1.8-1.8h-17.8Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M168.9 63c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.3c0-.7-.6-1.3-1.2-1.3l-17.7-.1c-.7 0-1.2.6-1.3 1.3v2.3c0 .4.1.7.4 1 .2.2.5.4.8.4l17.8.1Z"
                  className="cls-38"
                />
                <path
                  d="M168.9 63c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.3c0-.7-.6-1.3-1.2-1.3l-17.7-.1c-.7 0-1.2.6-1.3 1.3v2.3c0 .4.1.7.4 1 .2.2.5.4.8.4l17.8.1Z"
                  style={{
                    fill: "url(#linear-gradient-24)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m151.1 58.4 17.7.2c.5 0 .8.3.8.8v2.3c0 .4-.3.8-.7.8l-17.9-.2c-.4 0-.7-.3-.7-.8v-2.3c.1-.4.4-.8.8-.8m0-1c-.9 0-1.7.8-1.7 1.8v2.3c0 .5.2 1 .5 1.3.3.3.8.5 1.2.5l17.8.1c.4 0 .9-.2 1.2-.5s.5-.8.5-1.3v-2.3c-.1-1-.9-1.8-1.8-1.8l-17.7-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M168.8 59c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.3c0-.7-.6-1.3-1.2-1.3l-17.6-.1c-.7 0-1.2.6-1.2 1.3v2.3c0 .4.1.7.4 1 .2.2.5.4.8.4l17.6.1Z"
                  className="cls-38"
                />
                <path
                  d="M168.8 59c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.3c0-.7-.6-1.3-1.2-1.3l-17.6-.1c-.7 0-1.2.6-1.2 1.3v2.3c0 .4.1.7.4 1 .2.2.5.4.8.4l17.6.1Z"
                  style={{
                    fill: "url(#linear-gradient-25)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m151.2 54.5 17.5.1c.5 0 .8.3.8.8v2.3c0 .4-.3.8-.7.8l-17.7-.1c-.4 0-.7-.3-.7-.8v-2.3c.1-.4.4-.8.8-.8m0-1c-.9 0-1.7.8-1.7 1.8v2.3c0 .5.2 1 .5 1.3.3.3.8.5 1.2.5l17.7.1c.4 0 .9-.2 1.2-.5s.5-.8.5-1.3v-2.3c-.1-1-.9-1.8-1.8-1.8l-17.6-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M168.8 55.1c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.2c0-.7-.6-1.3-1.2-1.3l-17.5-.1c-.7 0-1.2.6-1.2 1.3v2.2c0 .4.1.7.4 1 .2.2.5.4.8.4l17.5.1Z"
                  className="cls-38"
                />
                <path
                  d="M168.8 55.1c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.2c0-.7-.6-1.3-1.2-1.3l-17.5-.1c-.7 0-1.2.6-1.2 1.3v2.2c0 .4.1.7.4 1 .2.2.5.4.8.4l17.5.1Z"
                  style={{
                    fill: "url(#linear-gradient-26)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m151.2 50.6 17.5.1c.5 0 .8.3.8.8v2.2c0 .4-.3.8-.7.8l-17.6-.1c-.4 0-.7-.3-.7-.8v-2.2c0-.4.3-.8.7-.8m0-1c-.9 0-1.7.8-1.8 1.8v2.2c0 .5.2 1 .5 1.3.3.3.8.5 1.2.5l17.6.1c.4 0 .9-.2 1.2-.5s.5-.8.5-1.3v-2.2c0-1-.8-1.8-1.7-1.8l-17.5-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M168.7 51.2c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.2c0-.7-.6-1.3-1.2-1.3l-17.4-.1c-.7 0-1.2.6-1.2 1.3v2.2c0 .4.1.7.4 1 .2.2.5.4.8.4l17.4.1Z"
                  className="cls-38"
                />
                <path
                  d="M168.7 51.2c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.2c0-.7-.6-1.3-1.2-1.3l-17.4-.1c-.7 0-1.2.6-1.2 1.3v2.2c0 .4.1.7.4 1 .2.2.5.4.8.4l17.4.1Z"
                  style={{
                    fill: "url(#linear-gradient-27)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m151.3 46.8 17.5.1c.4 0 .7.4.7.8v2.2c0 .4-.3.8-.7.8l-17.5-.1c-.4 0-.7-.3-.7-.8v-2.2c0-.4.3-.8.7-.8m0-1c-1 0-1.7.8-1.8 1.8v2.2c0 .5.2 1 .5 1.3.3.3.8.5 1.2.5l17.5.1c.4 0 .9-.2 1.2-.5s.5-.8.5-1.3v-2.2c0-1-.8-1.8-1.7-1.8l-17.4-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="M168.7 47.4c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.2c0-.7-.6-1.3-1.2-1.3l-17.2-.1c-.7 0-1.2.6-1.2 1.3v2.2c0 .4.1.7.4 1 .2.2.5.4.8.4l17.2.1Z"
                  className="cls-38"
                />
                <path
                  d="M168.7 47.4c.3 0 .6-.1.8-.4.2-.2.4-.6.4-1v-2.2c0-.7-.6-1.3-1.2-1.3l-17.2-.1c-.7 0-1.2.6-1.2 1.3v2.2c0 .4.1.7.4 1 .2.2.5.4.8.4l17.2.1Z"
                  style={{
                    fill: "url(#linear-gradient-28)",
                    strokeWidth: 0,
                  }}
                />
                <path
                  d="m151.3 43.1 17.4.1c.4 0 .7.4.7.8v2.2c0 .4-.3.8-.7.8l-17.4-.1c-.4 0-.7-.4-.7-.8v-2.2c0-.5.3-.8.7-.8m0-1c-.9 0-1.7.8-1.9 1.8v2.2c0 .5.2 1 .5 1.3.3.3.8.5 1.2.5l17.4.1c.4 0 .9-.2 1.2-.5s.5-.8.5-1.3V44c0-1-.8-1.8-1.7-1.8l-17.2-.1Z"
                  className="cls-1"
                />
              </g>
              <g className="cls-69">
                <path
                  d="m149.3 71.7.4-24c0-.4-.3-.8-.7-.8h-1c-.4 0-.7.3-.7.8l-.5 24c0 .5.3.9.7.9h1c.5-.1.8-.5.8-.9Z"
                  className="cls-38"
                />
                <path
                  d="m149.3 71.7.4-24c0-.4-.3-.8-.7-.8h-1c-.4 0-.7.3-.7.8l-.5 24c0 .5.3.9.7.9h1c.5-.1.8-.5.8-.9Z"
                  style={{
                    fill: "url(#linear-gradient-29)",
                    strokeWidth: 0,
                  }}
                />
              </g>
              <g className="cls-69">
                <path
                  d="m173.2 71.8-.5-24.1c0-.4-.3-.8-.7-.8h-1c-.4 0-.7.3-.7.8l.4 24.1c0 .5.4.9.8.9h1c.4-.1.7-.5.7-.9Z"
                  className="cls-38"
                />
                <path
                  d="m173.2 71.8-.5-24.1c0-.4-.3-.8-.7-.8h-1c-.4 0-.7.3-.7.8l.4 24.1c0 .5.4.9.8.9h1c.4-.1.7-.5.7-.9Z"
                  style={{
                    fill: "url(#linear-gradient-30)",
                    strokeWidth: 0,
                  }}
                />
              </g>
            </g>
          </g>
        </svg>


      </div>

    </>
  )
}

export default Device_VKB_SpaceEvo




