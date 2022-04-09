import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AuthContext from '../../contex/AuthContext';
import { fetchProblems } from '../../redux/problemSlice';
import Loading from '../Loading/Loading';
import ProblemCard from './ProblemCard';

const Easy = () => {
  const user = useContext(AuthContext);
  const dispatch = useDispatch();
  const { id } = useParams()
  const t2 = Date.now();
  const y = 1000 * 60 * 60 * 24;
  const store = useSelector((store) => store.problems)
  const problem = store.problem
  const loading=store.loading
  console.log("store",store)

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
                link={item.link}
                practice1={`${p1} days left`}
                practice2={`${p2} days left`}
                practice3={`${p3} days left`}
                practice4={`${p4} days left`}
                practice5={`${p5} days left`}
              index={index + 1} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Easy
