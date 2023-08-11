import React, { useEffect, useState } from "react";
import styles from "@/Components/styles/Price.module.css";
import { useRouter } from "next/router";

const Pricing = (props) => {
  let router = useRouter();

  const [MonthlySty, setMonthlySty] = useState({ color: "#1e4c91" });
  const [YearlySty, setYearlySty] = useState({ color: "#fff" });

  let { Plan, setPlan, PlanHandler, setPlanHandler, Duration, setDuration } = props

  const changePlan = () => {
    setPlan(() => {
      return { cycle: Duration, plan: PlanHandler }
    })
  }

  const PlanSellector = () => {
    setPlan(() => {
      return { cycle: Duration, plan: PlanHandler }
    })
    setTimeout(() => {
      router.push('card')
    }, 1000);
  }

  return (
    <>
      <div
        className={`col-12 d-flex justify-content-center align-items-center ${styles.bg}`}>
        <div>
          <h2 className="mb-4 text-center">Choose the right PlanHandler for you</h2>
          <table className={`table ${styles.table} col-12`}>
            <thead>
              <tr style={{ borderStyle: "none" }}>
                <td className="" style={{ borderStyle: "none" }}>
                  <div className={`${styles.switch_wrapper}`}>
                    <input
                      id="monthly"
                      type="radio"
                      name="monthly"
                      onChange={() => {
                        setDuration("monthly");
                        setMonthlySty({
                          color: "#1e4c91",
                        });
                        setYearlySty({
                          color: "#fff",
                        });
                        changePlan();
                      }}
                    />
                    <input
                      id="yearly"
                      type="radio"
                      name="yearly"
                      onChange={() => {
                        setDuration("yearly");
                        setMonthlySty({
                          color: "#fff",
                        });
                        setYearlySty({
                          color: "#1e4c91",
                        });
                        changePlan();
                      }}
                    />
                    <label htmlFor="monthly" style={MonthlySty}>
                      Monthly
                    </label>
                    <label htmlFor="yearly" style={YearlySty}>
                      Yearly
                    </label>
                    {Duration === "monthly" ? (
                      <span className={`${styles.highlighterLeft}`}></span>
                    ) : (
                      <span className={`${styles.highlighterRight}`}></span>
                    )}
                  </div>
                </td>
                <td
                  className="relative"
                  style={{ borderStyle: "none" }}
                  onClick={() => {
                    setPlanHandler(() => { return "mobile" });
                    changePlan();
                  }}
                >
                  {PlanHandler === "mobile" ? (
                    <div
                      className={`${styles.tbHead} ${styles.tbHeadSelected}`}
                    >
                      Mobile
                    </div>
                  ) : (
                    <div className={`${styles.tbHead}`}>Mobile</div>
                  )}
                </td>
                <td
                  className="relative"
                  style={{ borderStyle: "none" }}
                  onClick={() => {
                    setPlanHandler(() => { return "basic" });
                    changePlan();
                  }}
                >
                  {PlanHandler === "basic" ? (
                    <div
                      className={`${styles.tbHead} ${styles.tbHeadSelected}`}
                    >
                      Basic
                    </div>
                  ) : (
                    <div className={`${styles.tbHead}`}>Basic</div>
                  )}
                </td>
                <td
                  className="relative"
                  style={{ borderStyle: "none" }}
                  onClick={() => {
                    setPlanHandler(() => { return "standard" });
                    changePlan();
                  }}
                >
                  {PlanHandler === "standard" ? (
                    <div
                      className={`${styles.tbHead} ${styles.tbHeadSelected}`}
                    >
                      Standard
                    </div>
                  ) : (
                    <div className={`${styles.tbHead}`}>Standard</div>
                  )}
                </td>
                <td
                  className="relative"
                  style={{ borderStyle: "none" }}
                  onClick={() => {
                    setPlanHandler(() => { return "premium" });
                    changePlan();
                  }}
                >
                  {PlanHandler === "premium" ? (
                    <div
                      className={`${styles.tbHead} ${styles.tbHeadSelected}`}
                    >
                      Premium
                    </div>
                  ) : (
                    <div className={`${styles.tbHead}`}>Premium</div>
                  )}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Monthly price</th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                >
                  {
                    Duration == "monthly" ? "₹ 100" : "₹ 1000"
                  }
                </td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                >
                  {
                    Duration == "monthly" ? "₹ 200" : "₹ 2000"
                  }
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                >
                  {
                    Duration == "monthly" ? "₹ 500" : "₹ 5000"
                  }
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                >
                  {
                    Duration == "monthly" ? "₹ 700" : "₹ 7000"
                  }
                </td>
              </tr>
              <tr>
                <th>Video quality</th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                >
                  Good
                </td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                >
                  Good
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                >
                  Better
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                >
                  Best
                </td>
              </tr>
              <tr>
                <th>Resolution</th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                >
                  480p
                </td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                >
                  480p
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                >
                  1080p
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                >
                  4K+HDR
                </td>
              </tr>
              <tr style={{ borderStyle: "none" }}>
                <th style={{ borderStyle: "none" }}>
                  Decices you can use to watch
                </th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none", fontSize: "12px" }}
                >
                  Phone
                </td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none", fontSize: "12px" }}
                >
                  Phone
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none", fontSize: "12px" }}
                >
                  Phone
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none", fontSize: "12px" }}
                >
                  Phone
                </td>
              </tr>
              <tr style={{ borderStyle: "none", fontSize: "12px" }}>
                <th style={{ borderStyle: "none" }}></th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Tablet
                </td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Tablet
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Tablet
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Tablet
                </td>
              </tr>
              <tr style={{ borderStyle: "none", fontSize: "12px" }}>
                <th style={{ borderStyle: "none" }}></th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                ></td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Computer
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Computer
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  Computer
                </td>
              </tr>
              <tr style={{ borderStyle: "none", fontSize: "12px" }}>
                <th style={{ borderStyle: "none" }}></th>
                <td
                  className={`text-center ${PlanHandler == "mobile" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                ></td>
                <td
                  className={`text-center ${PlanHandler == "basic" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  TV
                </td>
                <td
                  className={`text-center ${PlanHandler == "standard" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  TV
                </td>
                <td
                  className={`text-center ${PlanHandler == "premium" ? styles.tbBodySelected : ""
                    }`}
                  style={{ borderStyle: "none" }}
                >
                  TV
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className="d-flex justify-content-center mt-5">
              <button
                className={`btn btn-primary ${styles.btn} col-4`}
                style={{ background: "#1f4d91" }}
                onClick={PlanSellector}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
