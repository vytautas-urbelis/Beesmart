import { useEffect, useState } from "react";
import stamp from "../../../assets/stamp.png";
import notcollected from "../../../assets/notcollected.png";
import defaultlogo from "../../../assets/defaultlogo.png";
import check from "../../../assets/check.png";

const Voucher = ({ voucher, loading }) => {
  const [collector, setCollector] = useState({});
  const [collectorType, setCollectorType] = useState(null);

  return (
    <>
      <div className="flex justify-center w-full pb-10 mb-10">
        <div className="rounded-md bg-zinc-50 flex flex-col text-primary-content w-80 shadow-md">
          <div className="stat flex items-center">
            <img src={`${voucher.logo || defaultlogo}`} alt="Campaign Logo" className="w-16 h-16 rounded-full p-2" />
            <div className="text-l text-left font-bold  text-lime-700">{voucher.name.toUpperCase()}</div>
          </div>
          <div>
            <div className="stat-title w-full ">
              {voucher.campaign.collector_type === 1 ? (
                <div className="text-right pr-14"></div>
              ) : voucher.campaign.collector_type === 2 ? (
                <div className="text-xl font-bold">You need: {collector.value_goal} points</div>
              ) : (
                <div className="text-xl font-bold">Campaign goal: {collector.value_goal} CHF</div>
              )}
            </div>
            <div className="flex items-center justify-center min-h-24">
              <div className="flex flex-row flex-wrap items-center justify-center rounded-lg w-80">
                {voucher.campaign.collector_type === 1 ? (
                  Array.from({ length: voucher.campaign.value_goal }).map((_, index) => (
                    <div
                      className="m-1 bg-zinc-300  border-slate-400 rounded-full w-12 h-12 flex items-center justify-center"
                      key={index}
                    >
                      <img src={check} alt="Stamp" className="opacity-25 w-11 h-11 rounded-full" />
                    </div>
                  ))
                ) : voucher.campaign.collector_type === 2 ? (
                  <div>
                    <div className="text-slate-400 text-xl">You reached goal!:</div>
                    <div className="text-slate-600 font-bold text-4xl">{voucher.campaign.value_goal}</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-slate-400 text-sm">You reached goal!:</div>
                    <div className="text-slate-600 font-bold text-2xl"> {voucher.campaign.value_goal}CHF</div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center pb-10 pt-5">
              <div className="text-2xl text-left font-bold  text-lime-700">{voucher.name.toUpperCase()}</div>
            </div>
            <div className="flex justify-center pb-10 pt-5">
              <img src={voucher.qr_code} alt="QR_CODE " className="w-52 h-52" />
            </div>
            <div className="text-xs stat-title w-full text-right pr-14 pb-4">
              <div className="text-yellow-500">Campaign expires:</div>{" "}
              {voucher.campaign.value_goal ? <div>{voucher.campaign.ending_date}</div> : <div>---</div>}
            </div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voucher;
