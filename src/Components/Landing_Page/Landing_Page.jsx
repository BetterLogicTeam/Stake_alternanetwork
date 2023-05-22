import React, { useEffect, useState } from "react";
import logo from "../../Assets/image/logo.png";
import { useSelector } from "react-redux";
import {
  Staking,
  Staking_Abi,
  tokenStaking,
  tokenStaking_Abi,
} from "../../utilies/constant";
import { toast } from "react-hot-toast";
import Web3 from "web3";

export default function Landing_Page() {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );
  const [getInput, setgetInput] = useState("");
  const [plan, setplan] = useState(0);
  const [spinner, setspinner] = useState(false);

  const [Stake_history, setStake_history] = useState({
    totalWithdrawanToken: 0,
    TotalStaker: 0,
    TotalStakedToken: 0,
    Balance_of: 0,
    realtimeReward: 0,
    Token_BalanceOf: 0,
  });

  const Stake = async (index) => {
    try {
      console.log("plan", index);
      if (acc == null) {
        toast.error("Connect Wallet First");
      } else {
        if (getInput == 0) {
          toast.error("Please Enter Token Value");
        } else {
          setspinner(true);
          let stakingContractOf = new web3.eth.Contract(Staking_Abi, Staking);
          let tokenContractOf = new web3.eth.Contract(
            tokenStaking_Abi,
            tokenStaking
          );

          console.log("values", getInput);
          let values = web3.utils.toWei(getInput);

          await tokenContractOf.methods.approve(Staking, values).send({
            from: acc,
          });
          toast.success("Approve Confirmed");
          await stakingContractOf.methods.stake(values, index).send({
            from: acc,
          });
          toast.success("Transaction Successful");
        }
      }
    } catch (error) {
      setspinner(false);
      console.log(error);
    }
  };

  let WebSupply = new Web3("https://bsc-testnet.public.blastapi.io");

  const Get_Stake_history = async () => {
    try {
      let stakingContractOf = new WebSupply.eth.Contract(Staking_Abi, Staking);
      let tokenContractOf = new WebSupply.eth.Contract(
        tokenStaking_Abi,
        tokenStaking
      );

      let Token_BalanceOf = await tokenContractOf.methods.balanceOf(acc).call();
      console.log("Token_BalanceOf", Token_BalanceOf);
      setStake_history((oldData) => {
        return { ...oldData, Token_BalanceOf: Token_BalanceOf };
      });

      let TotalStaker = await stakingContractOf.methods.totalStakers().call();
      setStake_history((oldData) => {
        return { ...oldData, TotalStaker: TotalStaker };
      });
      let TotalStakedToken = await stakingContractOf.methods
        .totalStakedToken()
        .call();
      TotalStakedToken = WebSupply.utils.fromWei(TotalStakedToken.toString());
      setStake_history((oldData) => {
        return { ...oldData, TotalStakedToken: TotalStakedToken };
      });
      let totalWithdrawanToken = await stakingContractOf.methods
        .totalWithdrawanToken()
        .call();
      totalWithdrawanToken = WebSupply.utils.fromWei(
        totalWithdrawanToken.toString()
      );
      setStake_history((oldData) => {
        return { ...oldData, totalWithdrawanToken: totalWithdrawanToken };
      });

      let Balance_of = await tokenContractOf.methods.balanceOf(Staking).call();

      Balance_of = WebSupply.utils.fromWei(Balance_of.toString());
      setStake_history((oldData) => {
        return { ...oldData, Balance_of: Balance_of };
      });

      let realtimeReward = await stakingContractOf.methods
        .realtimeReward(acc)
        .call();

      realtimeReward = WebSupply.utils.fromWei(realtimeReward.toString());
      realtimeReward = parseFloat(realtimeReward).toFixed(5);
      setStake_history((oldData) => {
        return { ...oldData, realtimeReward: realtimeReward };
      });

      console.log("TotalStake", Balance_of);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Get_Stake_history();
  }, [acc]);

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
              <p className="font-bold text-3xl">{Stake_history.TotalStaker}</p>
            </div>
            <div className="bg-btn-2 p-6 lg:w-96 space-y-4">
              <p className="font-semibold text-xl">Total Staked</p>
              <p className="font-bold text-3xl">
                {Stake_history.TotalStakedToken}
              </p>
            </div>
            <div className="bg-btn-2 p-6 lg:w-96 space-y-4  ">
              <p className="font-semibold text-xl">Total Withdrawn</p>
              <p className="font-bold text-3xl">
                {Stake_history.totalWithdrawanToken}
              </p>
            </div>
            <div className="bg-btn-1 p-6 lg:w-96 space-y-4">
              <p className="font-semibold text-xl">Contract Balance</p>
              <p className="font-bold text-3xl">{Stake_history.Balance_of}</p>
            </div>
            <div className="last_box">
              <div className="bg-btn-1 p-6 lg:w-96 space-y-4">
                <p className="font-semibold text-xl">Uncliamed Reward </p>
                <p className="font-bold text-3xl">
                  {Stake_history.realtimeReward}
                </p>
              </div>
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
                    value={plan == 0 ? getInput : ""}
                    onChange={(e) => setgetInput(e.target.value)}
                  />
                  <div
                    className="MuiBox-root css-1fmwmta"
                    onClick={() => (
                      setgetInput(Stake_history.Token_BalanceOf), setplan(0)
                    )}
                  >
                    Max
                  </div>
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
                type="button"
                onClick={() => (Stake(0), setplan(0))}
              >
                {spinner == true && plan == "0" ? (
                  <>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  "stake"
                )}

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
                    onChange={(e) => setgetInput(e.target.value)}
                    value={plan == 1 ? getInput : ""}
                  />
                  <div
                    className="MuiBox-root css-1fmwmta"
                    onClick={() => (
                      setgetInput(Stake_history.Token_BalanceOf), setplan(1)
                    )}
                  >
                    Max
                  </div>
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
                type="button"
                onClick={() => (Stake(1), setplan(1))}
              >
                {spinner == true && plan == "1" ? (
                  <>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  "stake"
                )}
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
                    onChange={(e) => setgetInput(e.target.value)}
                    value={plan == 2 ? getInput : ""}
                  />
                  <div
                    className="MuiBox-root css-1fmwmta"
                    onClick={() => (
                      setgetInput(Stake_history.Token_BalanceOf), setplan(2)
                    )}
                  >
                    Max
                  </div>
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
                type="button"
                onClick={() => (Stake(2), setplan(2))}
              >
                {spinner == true && plan == "2" ? (
                  <>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  "stake"
                )}
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
