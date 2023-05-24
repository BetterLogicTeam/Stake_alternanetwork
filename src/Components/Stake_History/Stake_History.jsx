import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Staking, Staking_Abi } from "../../utilies/constant";
import Web3 from "web3";
import Countdown from "react-countdown";
import { Modal } from "antd";
import {
  ExclamationCircleOutlined,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { toast } from "react-hot-toast";

export default function Stake_History() {
  let WebSupply = new Web3("https://bsc.publicnode.com");
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );

  const [Stake_History_show, setStake_History_show] = useState([]);

  const Stake_History = async () => {
    try {
      let stakingContractOf = new WebSupply.eth.Contract(Staking_Abi, Staking);
      let getCount = await stakingContractOf.methods.Stakers(acc).call();
      getCount = getCount.stakeCount;
      let Arry = [];
      let History_obj = {};
      for (let i = 0; i < getCount; i++) {
        console.log("i", i);
        let stakersRecord = await stakingContractOf.methods
          .stakersRecord(acc, i)
          .call();
        console.log("getCount", getCount);
        History_obj = {
          Sno: i,
          staketime: stakersRecord.withdrawtime,
          amount: WebSupply.utils.fromWei(stakersRecord.amount.toString()),
          unstaked: stakersRecord.unstaked,
          withdrawan: stakersRecord.withdrawan,
        };

        Arry = [...Arry, History_obj];
      }
      setStake_History_show(Arry);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("History_obj", Stake_History_show);
  useEffect(() => {
    Stake_History();
  }, [acc]);

  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Unstaked Time Reached!</div>
      </>
    );
  };

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="text_days fs-5 ">
          {/* {days} D {hours} H {minutes} M {seconds} S */}
          {days}d : {hours}h : {minutes}m : {seconds}s
        </div>
      );
    }
  };
  const confirm = (index) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content:
        "Before unstake time 15% will be deducted your amount and reward",
      okText: "Continue",
      cancelText: "Cancel",
      onOk: () => Unstake(index),
    });
  };

  const Unstake = async (index) => {
    try {
      let stakingContractOf = new web3.eth.Contract(Staking_Abi, Staking);
      await stakingContractOf.methods.unstake(index).send({
        from: acc,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const Withdraw = async (index, time) => {
    try {
      let current_Time = Math.floor(new Date().getTime() / 1000.0);
      if (current_Time <= time) {
        toast.error("You can only claim after time period Over");
      } else {
        console.log("items.staketime", time);
        let stakingContractOf = new web3.eth.Contract(Staking_Abi, Staking);
        await stakingContractOf.methods.withdraw(index).send({
          from: acc,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto lg:px-10 px-5">
        <div className="flex flex-col items-center justify-center lg:py-0 py-8">
          <div className="text-center">
            <p className="text-center pb-1 text-3xl font-bold">Your Stakes</p>
            <hr className="line flex mx-auto mb-8" />
          </div>
          <div className="MuiBox-root css-ihc79b">
            <div className="d-flex justify-content-end align-items-center mb-3">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c refershBTB"
                tabIndex={0}
                type="button"
                onClick={() => Stake_History()}
              >
                <span className="me-2">Refresh</span>
                <SyncOutlined className="SyncOutlined" />
              </button>
            </div>
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
                  {Stake_History_show.length == 0 ? (
                    <>
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
                      </td>{" "}
                    </>
                  ) : (
                    <>
                      {Stake_History_show.map((items, index) => {
                        let current_Time = Math.floor(
                          new Date().getTime() / 1000.0
                        );
                        return (
                          <>
                            {" "}
                            {items.unstaked == true ||
                            items.withdrawan == true ? (
                              <></>
                            ) : (
                              <>
                                <tr className="MuiTableRow-root css-1gqug66">
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-white text-center"
                                    scope="col"
                                  >
                                    {items.Sno}
                                  </td>
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-white text-center"
                                    scope="col"
                                  >
                                    {items.amount}
                                  </td>
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-white text-center"
                                    scope="col"
                                  >
                                    <Countdown
                                      date={
                                        Date.now() +
                                        (parseInt(items.staketime) * 1000 -
                                          Date.now())
                                      }
                                      renderer={renderer}
                                    />
                                  </td>
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-white text-center"
                                    scope="col"
                                  >
                                    <button
                                      className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c"
                                      tabIndex={0}
                                      type="button"
                                      onClick={() =>
                                        current_Time >= items.staketime
                                          ? Unstake(index)
                                          : confirm(index)
                                      }
                                    >
                                      Unstake
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                  </td>{" "}
                                  <td
                                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg text-white text-center"
                                    scope="col"
                                  >
                                    <button
                                      className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c"
                                      tabIndex={0}
                                      type="button"
                                      onClick={() =>
                                        Withdraw(index, items.staketime)
                                      }
                                    >
                                      Claim
                                      <span className="MuiTouchRipple-root css-w0pj6f" />
                                    </button>
                                  </td>
                                </tr>{" "}
                              </>
                            )}
                          </>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
