import workersDescription from "../../../assets/workersDesc/workersDescription";
import Worker from "./Worker";

const CoolTeamWorkers = () => {
  return (
    <div className={`${"workers-box"}`}>
      <div className={`${"workers-grid"}`}>
        <div>
          <Worker
            name="Sergey Popov"
            position="NOC team leader"
            dateJoined="2018"
            description={workersDescription.at(0)}
            
          />
        </div>

        <div>
          <Worker
            name="Anastasia Shapira"
            position="Project Manager"
            dateJoined="2015"
            description={workersDescription.at(1)}
          />
        </div>

        <div>
          <Worker
            name="Diego Litman"
            position="BI Developer"
            dateJoined="2009"
            description={workersDescription.at(2)}
          />
        </div>

        <div>
          <Worker
            name="Amir Shinar"
            position="Developers Team leader"
            dateJoined="2011"
            description={workersDescription.at(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default CoolTeamWorkers;
