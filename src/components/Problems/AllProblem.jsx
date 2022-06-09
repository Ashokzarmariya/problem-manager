import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import AuthContext from '../../contex/AuthContext';
import { fetchAllProblem } from '../../redux/getAllProblemSlice';
import Empty from '../Empty/Empty';

import Loading from '../Loading/Loading';
import ProblemCard from './ProblemCard';

const AllProblem = () => {
    const user = useContext(AuthContext);
  const dispatch = useDispatch();
  
  const t2 = Date.now();
  const y = 1000 * 60 * 60 * 24;
  const store = useSelector((store) => store.allproblems)
  const problem = store.allproblem || []
  console.log("problem",problem)
  const loading=store.loading
    console.log("store", store)
    console.log("Loading",loading)

  const userId = user ? user._id : null
  console.log("userId",userId)
  useEffect(() => {
  

    const getData = async () => {

      dispatch(fetchAllProblem(userId))
      
    };
    getData();
    
  }, [userId,dispatch]);
  return (
      <div>
          {!loading && problem.length === 0 && <Empty />}
      {loading && <Loading/>}
      {!problem.message && !loading && (
        <div className="container">
          {problem.map((item, index) => {
            
            const p1 = Math.floor(((new Date(item.practice_1).getTime()) - t2) / y);
            const p2 = Math.floor(((new Date(item.practice_2).getTime()) - t2) / y);
            const p3 = Math.floor(((new Date(item.practice_3).getTime()) - t2) / y);
            const p4 = Math.floor(((new Date(item.practice_4).getTime()) - t2) / y);
            const p5 = Math.floor(((new Date(item.practice_5).getTime())- t2)/y);
            
            return (
              <ProblemCard
                link={item.link}
                id={item._id}
                isDone={item.isDone}
                practice1={p1}
                practice2={p2}
                practice3={p3}
                practice4={p4}
                practice5={p5} 
              index={index + 1} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AllProblem
