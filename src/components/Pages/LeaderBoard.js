import React,{useEffect, useState} from 'react'
import SidebarNav from './SidebarNav'
import HighestScore from './GameScore/HighestScore'
import TotalScore from './GameScore/TotalScore'
import MyScore from './GameScore/MyScore'
import { GetHighestScores, GetMyScores, GetTotalScores } from './GameScore/GetFirebaseScores'

const LeaderBoard = () => {
  //set up score manually for now in const default Score List
  //refers to "highest game score tab in the code"
//when we will integrate firebase Api we ill use setGameScoreList function to propagate API
  const[ highestScoreList, setHighestScoreList ] = useState([]);
  // refers to 'My highest games tab in the code"
  const[ myScoreList, setMyScoreList ] =useState([]);
  //refers to "Total score tab in the code"
  const[ totalScoreList, setTotalScoreList ] =  useState([]);
  // change step for tab related to className={activeStep}
  const[activeStep,setStep] = useState(0);
  //we will connect firebase api here using useEffect and save api data response in setGameScoreList

  useEffect(() => {
    const RetrieveScores = async () => {
      const TotalScores = await GetTotalScores()
      setTotalScoreList(TotalScores)
      const HighestScores = await GetHighestScores()
      setHighestScoreList(HighestScores)
      const MyScores = await GetMyScores()
      setMyScoreList(MyScores)
    }
    RetrieveScores()    
  }, [])

    return (

        <div className="row">
            <SidebarNav/>
            <div className="col-md-9">
          <div className="row mb-1">
              <div className="col-md-12 text-center">
                  <h1>Leader Board</h1>
                </div>
          </div>    
          <div className="row">
			<div className="col-md-12">
				<nav className="sidebarnav">
					<div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a className={activeStep === 0 ? "nav-item nav-link active": "nav-item nav-link" } onClick={(e)=>{e.preventDefault(); setStep(0);}} href="/">Total Score</a>
						<a  className={activeStep === 1 ? "nav-item nav-link active": "nav-item nav-link" } onClick={(e)=>{e.preventDefault(); setStep(1);}} href="/">Highest games</a>
						<a className={activeStep === 2 ? "nav-item nav-link active": "nav-item nav-link" } onClick={(e)=>{e.preventDefault(); setStep(2);}} href="/">My highest games</a>
					</div>
				</nav>
				<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
					<div className={activeStep === 0 ? "tab-pane fade show active" : "tab-pane fade"}>
            <TotalScore gameScoreList={totalScoreList}/>
					</div>
					<div className={activeStep === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
            <HighestScore gameScoreList={highestScoreList}/>
					</div>
					<div className={activeStep === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
            <MyScore gameScoreList={myScoreList}/>
					</div>
				</div>

			</div>
		</div>

</div>
</div>
    )
}

export default LeaderBoard