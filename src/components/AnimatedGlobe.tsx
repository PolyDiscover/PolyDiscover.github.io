interface GlobeProps {
    className?: string;
}

export function AnimatedGlobe({ className = '' }: GlobeProps) {
    return (
        <div className={`globe-container ${className}`}>
            <svg aria-hidden="true" height="100%" viewBox="-1 -1 802 402" width="100%" className="globe-svg">
                <g data-testid="globe-wireframe">
                    <path d="M 400 800 A -400 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 800 A -328.701 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 800 A -235.355 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 800 A -123.097 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 800 A 0 400 0 0 0 400 0" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 0 A 123.097 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 0 A 235.355 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 0 A 328.701 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M 400 0 A 400 400 0 0 0 400 800" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M160,80 h480" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M80,160 h640" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M33.394,240 h733.212" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M8.082,320 h783.837" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                    <path d="M0,400 h800" fill="none" stroke="url(#globe-gradient)" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                </g>

                <g data-testid="globe-nodes">
                    {/* Node 1 - Right side */}
                    <g>
                        <g opacity="1">
                            <g id="ddd35" opacity="1">
                                <path d="M 597.221 80 A 328.701 400 0 0 0 400 0M 662.961 160 A 328.701 400 0 0 0 597.221 80M 701.26 240 A 328.701 400 0 0 0 662.961 160" fill="none" stroke="url(#ddd35-gradient)" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke">
                                    <animate attributeName="opacity" dur="4.5s" id="opacity-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="0;1;1;1;1;0;0"></animate>
                                </path>
                                <defs>
                                    <radialGradient cx="100" cy="100" gradientUnits="userSpaceOnUse" id="ddd35-gradient" r="0">
                                        <stop offset="0" stopColor="#3b82f6"></stop>
                                        <stop offset="0.4" stopColor="#3b82f6"></stop>
                                        <stop offset="1" stopColor="#3b82f6" stopOpacity="0"></stop>
                                        <animate attributeName="cx" dur="4.5s" id="cx-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="400;400;597.221;662.961;701.26;701.26;0"></animate>
                                        <animate attributeName="cy" dur="4.5s" id="cy-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="0;0;80;160;240;240;0"></animate>
                                        <animate attributeName="r" dur="4.5s" id="r-ddd35" keyTimes="0;0.133;0.267;0.4;0.533;0.667;1" repeatCount="indefinite" values="0;120;120;120;120;0;0"></animate>
                                    </radialGradient>
                                </defs>
                            </g>
                        </g>
                        <g>
                            <g opacity="1">
                                <circle cx="701.2596786376284" cy="240" fill="none" r="0" stroke="#3b82f6" strokeWidth="2">
                                    <animate attributeName="r" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0"></animate>
                                    <animate attributeName="opacity" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0"></animate>
                                </circle>
                            </g>
                            <circle cx="701.2596786376284" cy="240" className="globe-node-bg" r="16" stroke="url(#globe-gradient)" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="701.2596786376284" cy="240" fill="#3b82f6" r="5"></circle>
                        </g>
                    </g>

                    {/* Node 2 - Left side */}
                    <g>
                        <g opacity="1">
                            <g id="dddd-35" opacity="1">
                                <path d="M 400 0 A -328.701 400 0 0 0 202.779 80M 202.779 80 A -328.701 400 0 0 0 137.039 160M 137.039 160 A -328.701 400 0 0 0 98.74 240M 98.74 240 A -328.701 400 0 0 0 77.94 320" fill="none" stroke="url(#dddd-35-gradient)" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke">
                                    <animate attributeName="opacity" dur="4.5s" id="opacity-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;1;1;1;1;1;0;0"></animate>
                                </path>
                                <defs>
                                    <radialGradient cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dddd-35-gradient" r="0">
                                        <stop offset="0" stopColor="#3b82f6"></stop>
                                        <stop offset="0.4" stopColor="#3b82f6"></stop>
                                        <stop offset="1" stopColor="#3b82f6" stopOpacity="0"></stop>
                                        <animate attributeName="cx" dur="4.5s" id="cx-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="400;400;202.779;137.039;98.74;77.94;77.94;0"></animate>
                                        <animate attributeName="cy" dur="4.5s" id="cy-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;0;80;160;240;320;320;0"></animate>
                                        <animate attributeName="r" dur="4.5s" id="r-dddd-35" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;120;120;120;120;120;0;0"></animate>
                                    </radialGradient>
                                </defs>
                            </g>
                        </g>
                        <g>
                            <g opacity="1">
                                <circle cx="77.93985659667823" cy="320" fill="none" r="0" stroke="#3b82f6" strokeWidth="2">
                                    <animate attributeName="r" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0"></animate>
                                    <animate attributeName="opacity" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0"></animate>
                                </circle>
                            </g>
                            <circle cx="77.93985659667823" cy="320" className="globe-node-bg" r="16" stroke="url(#globe-gradient)" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="77.93985659667823" cy="320" fill="#3b82f6" r="5"></circle>
                        </g>
                    </g>

                    {/* Node 3 - Upper center-right */}
                    <g>
                        <g opacity="1">
                            <g id="dd15" opacity="1">
                                <path d="M 473.858 80 A 123.097 400 0 0 0 400 0M 498.478 160 A 123.097 400 0 0 0 473.858 80" fill="none" stroke="url(#dd15-gradient)" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke">
                                    <animate attributeName="opacity" dur="4.5s" id="opacity-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;1;1;0;0"></animate>
                                </path>
                                <defs>
                                    <radialGradient cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dd15-gradient" r="0">
                                        <stop offset="0" stopColor="#3b82f6"></stop>
                                        <stop offset="0.4" stopColor="#3b82f6"></stop>
                                        <stop offset="1" stopColor="#3b82f6" stopOpacity="0"></stop>
                                        <animate attributeName="cx" dur="4.5s" id="cx-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="400;400;473.858;498.478;498.478;0"></animate>
                                        <animate attributeName="cy" dur="4.5s" id="cy-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;0;80;160;160;0"></animate>
                                        <animate attributeName="r" dur="4.5s" id="r-dd15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;120;120;120;0;0"></animate>
                                    </radialGradient>
                                </defs>
                            </g>
                        </g>
                        <g>
                            <g opacity="1">
                                <circle cx="498.47759065022575" cy="160" fill="none" r="0" stroke="#3b82f6" strokeWidth="2">
                                    <animate attributeName="r" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0"></animate>
                                    <animate attributeName="opacity" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0"></animate>
                                </circle>
                            </g>
                            <circle cx="498.47759065022575" cy="160" className="globe-node-bg" r="16" stroke="url(#globe-gradient)" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="498.47759065022575" cy="160" fill="#3b82f6" r="5"></circle>
                        </g>
                    </g>

                    {/* Node 4 - Upper left */}
                    <g>
                        <g opacity="1">
                            <g id="dl-15" opacity="1">
                                <path d="M 400 0 A -123.097 400 0 0 0 326.142 80M326.142,80 h-67.355" fill="none" stroke="url(#dl-15-gradient)" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke">
                                    <animate attributeName="opacity" dur="4.5s" id="opacity-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;1;1;0;0"></animate>
                                </path>
                                <defs>
                                    <radialGradient cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dl-15-gradient" r="0">
                                        <stop offset="0" stopColor="#3b82f6"></stop>
                                        <stop offset="0.4" stopColor="#3b82f6"></stop>
                                        <stop offset="1" stopColor="#3b82f6" stopOpacity="0"></stop>
                                        <animate attributeName="cx" dur="4.5s" id="cx-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="400;400;326.142;258.787;258.787;0"></animate>
                                        <animate attributeName="cy" dur="4.5s" id="cy-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;0;80;80;80;0"></animate>
                                        <animate attributeName="r" dur="4.5s" id="r-dl-15" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;120;120;120;0;0"></animate>
                                    </radialGradient>
                                </defs>
                            </g>
                        </g>
                        <g>
                            <g opacity="1">
                                <circle cx="258.7867965644036" cy="80" fill="none" r="0" stroke="#3b82f6" strokeWidth="2">
                                    <animate attributeName="r" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0"></animate>
                                    <animate attributeName="opacity" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0"></animate>
                                </circle>
                            </g>
                            <circle cx="258.7867965644036" cy="80" className="globe-node-bg" r="16" stroke="url(#globe-gradient)" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="258.7867965644036" cy="80" fill="#3b82f6" r="5"></circle>
                        </g>
                    </g>

                    {/* Node 5 - Center with vertical path */}
                    <g>
                        <g opacity="1">
                            <g id="dddl05" opacity="1">
                                <path d="M 400 80 A 0 400 0 0 0 400 0M 400 160 A 0 400 0 0 0 400 80M 400 240 A 0 400 0 0 0 400 160M400,240 h-112.82" fill="none" stroke="url(#dddl05-gradient)" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke">
                                    <animate attributeName="opacity" dur="4.5s" id="opacity-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;1;1;1;1;1;0;0"></animate>
                                </path>
                                <defs>
                                    <radialGradient cx="100" cy="100" gradientUnits="userSpaceOnUse" id="dddl05-gradient" r="0">
                                        <stop offset="0" stopColor="#3b82f6"></stop>
                                        <stop offset="0.4" stopColor="#3b82f6"></stop>
                                        <stop offset="1" stopColor="#3b82f6" stopOpacity="0"></stop>
                                        <animate attributeName="cx" dur="4.5s" id="cx-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="400;400;400;400;400;287.18;287.18;0"></animate>
                                        <animate attributeName="cy" dur="4.5s" id="cy-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;0;80;160;240;240;240;0"></animate>
                                        <animate attributeName="r" dur="4.5s" id="r-dddl05" keyTimes="0;0.111;0.222;0.333;0.444;0.556;0.667;1" repeatCount="indefinite" values="0;120;120;120;120;120;0;0"></animate>
                                    </radialGradient>
                                </defs>
                            </g>
                        </g>
                        <g>
                            <g opacity="1">
                                <circle cx="287.17974664711625" cy="240" fill="none" r="0" stroke="#3b82f6" strokeWidth="2">
                                    <animate attributeName="r" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;12;18;24;0;0"></animate>
                                    <animate attributeName="opacity" dur="4.5s" keyTimes="0;0.167;0.333;0.5;0.667;1" repeatCount="indefinite" values="0;1;0.5;0;0;0"></animate>
                                </circle>
                            </g>
                            <circle cx="287.17974664711625" cy="240" className="globe-node-bg" r="16" stroke="url(#globe-gradient)" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="287.17974664711625" cy="240" fill="#3b82f6" r="5"></circle>
                        </g>
                    </g>
                </g>

                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="globe-gradient" x1="0" x2="0" y1="0" y2="400">
                        <stop offset="0%" className="globe-line-stop"></stop>
                        <stop offset="100%" className="globe-line-stop-end"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default AnimatedGlobe;
