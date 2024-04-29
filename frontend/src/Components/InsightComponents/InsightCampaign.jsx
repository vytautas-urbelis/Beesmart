import {useEffect, useState} from "react";
import BarChart from "./Graphics/BarChart.jsx";
import {getInsightPoints, getInsightStamps, getInsightVisits, getInsightVouchers} from "../../axios/axiosInsights.js";

const InsightCampaign = ({ campaign }) => {
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
      const [insightPoints, setInsightPoints] = useState([])
      const [insightStamps, setInsightStamps] = useState([])
      const [insightVisits, setInsightVisits] = useState([])
      const [insightVouchers, setInsightVouchers] = useState([])

      useEffect(() => {
          const fetchData = async () => {
            setError(null);
            setIsLoading(true);

            try {
              const data = await getInsightPoints(campaign?.id);
              setInsightPoints(data);
            } catch (error) {
              setError(error.message || "Failed to load insights. Please try again.");
            }

            try {
              const data = await getInsightStamps(campaign?.id);
              setInsightStamps(data);
            } catch (error) {
              setError(error.message || "Failed to load insights. Please try again.");
            }

            try {
              const data = await getInsightVisits(campaign?.id);
              setInsightVisits(data);
            } catch (error) {
              setError(error.message || "Failed to load insights. Please try again.");
            }


            try {
              const data = await getInsightVouchers(campaign?.id);
              setInsightVouchers(data);
            } catch (error) {
              setError(error.message || "Failed to load insights. Please try again.");
            } finally {
              setIsLoading(false);
            }
          };
          fetchData();
          }, []);

      console.log('Points', insightPoints)


  return (
      <>
          <div className="lg:flex lg:justify-center lg:gap-4">
              <div
                  className="max-w-md lg:max-w-xl xl:max-w-4xl 2xl:max-w-5xl w-full bg-base-100 rounded-lg shadow-lg lg:pb-2">
                  <h1 className="text-xl lg:text-2xl text-slate-600 font-semibold text-center mt-2 mb-6">Acquired Stamps
                      - Per User</h1>
                  <BarChart insight={insightStamps}/>
              </div>

              <div
                  className="max-w-md lg:max-w-xl xl:max-w-4xl 2xl:max-w-5xl w-full bg-base-100 rounded-lg shadow-lg lg:pb-2">
                  <h1 className="text-xl lg:text-2xl text-slate-600 font-semibold text-center mt-2 mb-6">Accesses by
                      period</h1>
                  <BarChart insight={insightVisits}/>
              </div>
          </div>
          <div className="lg:flex lg:justify-center lg:gap-4">
              {/*<div*/}
              {/*    className="max-w-md lg:max-w-xl xl:max-w-4xl 2xl:max-w-5xl w-full bg-base-100 rounded-lg shadow-lg lg:pb-2">*/}
              {/*    <h1 className="text-xl lg:text-2xl text-slate-600 font-semibold text-center mt-2 mb-6">POINTS</h1>*/}
              {/*    <BarChart insight={insightPoints}/>*/}
              {/*</div>*/}

              <div
                  className="max-w-md lg:max-w-xl xl:max-w-4xl 2xl:max-w-5xl w-full bg-base-100 rounded-lg shadow-lg lg:pb-2">
                  <h1 className="text-xl lg:text-2xl text-slate-600 font-semibold text-center mt-2 mb-6">VOUCHER</h1>
                  <BarChart insight={insightVouchers}/>
              </div>
          </div>

      </>
  );
};

export default InsightCampaign;