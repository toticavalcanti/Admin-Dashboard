import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";
function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">
          Revanue
        </span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">
            $2,412
          </span>
          <span className="featureMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">
          Sales
        </span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">
            $4,412
          </span>
          <span className="featureMoneyRate">
            -1.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">
          Cost
        </span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">
            $2,225
          </span>
          <span className="featureMoneyRate">
            +2.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}


export default FeaturedInfo
