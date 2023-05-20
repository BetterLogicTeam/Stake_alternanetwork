import React from "react";
import logo from "../../Assets/image/logo.png";


export default function Landing_Page() {
  return (
    <div>
     <div className="container mx-auto lg:px-20 px-5">
            <div className="App">
              <div id="tsparticles">
                <canvas
                  style={{
                    pointerEvents: "none",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100% !important",
                    height: "100% !important",
                    top: "0px !important",
                    left: "0px !important",
                    zIndex: "1 !important",
                    position: "fixed !important",
                    backgroundColor: "rgb(14, 14, 15)",
                  }}
                  data-generated="false"
                  aria-hidden="true"
                  width={768}
                  height={366}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:py-20 py-8">
              <div className="grid md:grid-cols-2 grid-cols-1 md:grid-row-2 grid-rows-1 gap-6 items-center justify-center text-center">
                <div className="bg-btn-1 p-6 lg:w-96 w-72 space-y-4">
                  <p className="font-semibold text-xl">Total Stakers</p>
                  <p className="font-bold text-3xl">394</p>
                </div>
                <div className="bg-btn-2 p-6 lg:w-96 space-y-4">
                  <p className="font-semibold text-xl">Total Staked</p>
                  <p className="font-bold text-3xl">458308032.226</p>
                </div>
                <div className="bg-btn-2 p-6 lg:w-96 space-y-4">
                  <p className="font-semibold text-xl">Total Withdrawn</p>
                  <p className="font-bold text-3xl">68931484.723</p>
                </div>
                <div className="bg-btn-1 p-6 lg:w-96 space-y-4">
                  <p className="font-semibold text-xl">Contract Balance</p>
                  <p className="font-bold text-3xl">341068485.355</p>
                </div>
              </div>
              <div className="MuiBox-root css-2etnu2">
                <div className="MuiBox-root css-11az635">
                  <img className="MuiBox-root css-1o7w8lq" src={logo} alt="" />
                  <div className="MuiStack-root css-bimwmu">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-ggrk9l">
                      APR
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-11pyxb5">
                      120%
                    </h6>
                  </div>
                  <div className="MuiStack-root css-1drd8pl">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-ggrk9l">
                      Lock Duration
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-11pyxb5">
                      7 Days
                    </h6>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-m5h15k">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-segi59">
                      <input
                        aria-invalid="false"
                        id=":r0:"
                        placeholder="Enter Alterna to Stake"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd css-b52kj1"
                        defaultValue=""
                      />
                      <div className="MuiBox-root css-1fmwmta">Max</div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-ihdtdm">
                          <span className="notranslate">​</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c"
                    tabIndex={0}
                    type="button"
                  >
                    stake
                    <span className="MuiTouchRipple-root css-w0pj6f" />
                  </button>
                </div>
                <div className="MuiBox-root css-11az635">
                  <img className="MuiBox-root css-1o7w8lq" src={logo} alt="" />
                  <div className="MuiStack-root css-bimwmu">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-ggrk9l">
                      APR
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-11pyxb5">
                      150%
                    </h6>
                  </div>
                  <div className="MuiStack-root css-1drd8pl">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-ggrk9l">
                      Lock Duration
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-11pyxb5">
                      15 Days
                    </h6>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-m5h15k">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-segi59">
                      <input
                        aria-invalid="false"
                        id=":r1:"
                        placeholder="Enter Alterna to Stake"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd css-b52kj1"
                        defaultValue="0.0001"
                      />
                      <div className="MuiBox-root css-1fmwmta">Max</div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-ihdtdm">
                          <span className="notranslate">​</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c"
                    tabIndex={0}
                    type="button"
                  >
                    stake
                    <span className="MuiTouchRipple-root css-w0pj6f" />
                  </button>
                </div>
                <div className="MuiBox-root css-11az635">
                  <img className="MuiBox-root css-1o7w8lq" src={logo} alt="" />
                  <div className="MuiStack-root css-bimwmu">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-ggrk9l">
                      APR
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-11pyxb5">
                      420%
                    </h6>
                  </div>
                  <div className="MuiStack-root css-1drd8pl">
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-ggrk9l">
                      Lock Duration
                    </h6>
                    <h6 className="MuiTypography-root MuiTypography-subtitle1 css-11pyxb5">
                      30 Days
                    </h6>
                  </div>
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-m5h15k">
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-segi59">
                      <input
                        aria-invalid="false"
                        id=":r2:"
                        placeholder="Enter Alterna to Stake"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd css-b52kj1"
                        defaultValue=""
                      />
                      <div className="MuiBox-root css-1fmwmta">Max</div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-ihdtdm">
                          <span className="notranslate">​</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c"
                    tabIndex={0}
                    type="button"
                  >
                    stake
                    <span className="MuiTouchRipple-root css-w0pj6f" />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-center pb-5 text-3xl font-bold">
                  Your Stakes
                </p>
                <hr className="line flex mx-auto mb-8" />
              </div>
              <div className="MuiBox-root css-ihc79b">
                <div
                  className="MuiTableContainer-root css-48ybtg"
                  border="none"
                  pt={2}
                  pb={5}
                >
                  <table
                    className="MuiTable-root css-1owb465"
                    aria-label="simple table"
                    style={{ minWidth: 600 }}
                  >
                    <thead className="MuiTableHead-root css-1wbz3t9">
                      <tr className="MuiTableRow-root MuiTableRow-head css-1gqug66">
                        <th
                          className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                          scope="col"
                          style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                        >
                          #
                        </th>
                        <th
                          className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                          scope="col"
                          style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                        >
                          Staked Amount
                        </th>
                        <th
                          className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                          scope="col"
                          style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                        >
                          Withdrawal Time
                        </th>
                        <th
                          className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                          scope="col"
                          style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                        >
                          Unstake
                        </th>
                        <th
                          className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                          scope="col"
                          style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                        >
                          Claim
                        </th>
                      </tr>
                    </thead>
                    <tbody className="MuiTableBody-root css-1xnox0e">
                      <tr className="MuiTableRow-root css-1gqug66">
                        <td
                          className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg"
                          colSpan={5}
                          style={{ border: "none" }}
                        >
                          <div className="MuiBox-root css-ehd0rl">
                            <p className="MuiTypography-root MuiTypography-body1 css-o7q7an">
                              You have no staking data
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
