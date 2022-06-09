import React, { useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AuthContext from '../../contex/AuthContext';
import { fetchProblems } from '../../redux/problemSlice';
import Empty from '../Empty/Empty';
import Loading from '../Loading/Loading';
import ProblemCard from './ProblemCard';

const Easy = () => {
  const user = useContext(AuthContext);
  const dispatch = useDispatch();
  const { id } = useParams()
  const t2 = Date.now();
  const y = 1000 * 60 * 60 * 24;
  const store = useSelector((store) => store.problems)
  const problem = store.problem || []
  const loading=store.loading
  console.log("store easy", problem)
 

  const userId = user ? user._id : null
  
  console.log("userId",userId)
  useEffect(() => {
    const data = {
      id,
      userId
    }
    console.log("data",data)
    const getData = async () => {

      dispatch(fetchProblems(data))
      
    };
    getData();
    
  }, [id,userId,dispatch]);

  
  return (
    <div>
      {!loading && problem.length === 0 && <Empty />}
      
       {loading && <Loading/>}
      {!loading && (
        <div className="container">
          {problem.map((item, index) => {
            
            const p1 = Math.floor(((new Date(item.practice_1).getTime()) - t2) / y);
            const p2 = Math.floor(((new Date(item.practice_2).getTime()) - t2) / y);
            const p3 = Math.floor(((new Date(item.practice_3).getTime()) - t2) / y);
            const p4 = Math.floor(((new Date(item.practice_4).getTime()) - t2) / y);
            const p5 = Math.floor(((new Date(item.practice_5).getTime())- t2)/y);
            
            return (
              <ProblemCard
                key={item._id}
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

export default Easy
