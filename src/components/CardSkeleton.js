import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <section>
      {/* <ul className="navbar">
        <Skeleton height={40} width={`100%`} />
      </ul> */}

      <h2 className="section-title">
        <Skeleton height={28} width={300} />
      </h2>

      <ul className="list">
        {Array(9)
          // @ts-ignore
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton height={180} />
              <h4 className="card-title">
                <Skeleton height={36} width={`80%`} />
              </h4>
              <p className="card-channel">
                <Skeleton width={`60%`} />
              </p>
              <div className="card-metrics">
                <Skeleton width={`90%`} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default CardSkeleton;
