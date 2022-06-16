/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-06-16 16:23:04
 * @LastEditors: wxy
 * @LastEditTime: 2022-06-16 18:26:36
 */
import React, { useState, useEffect, useCallback } from 'react'
import './App.css';

const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']

function CardFlipper (props) {
  const { number = 456 } = props
  const [list, setList] = useState(number.toString().split(''))

  const scroll = useCallback(() => {
    let data = list.map((value) => {
      return {
        num: value,
        top: 0
      }
    });
    let Hei = parseFloat(getComputedStyle(document.getElementById("dataNums"))?.height);
    data.forEach((value) => {
        value.top = parseFloat((value.num * Hei) + (Hei * 10) + '');
    });
    setList(data)
  }, [list])

  useEffect(() => {
    scroll()
  }, [number, scroll])

  return (
    <div className="App">
      <div className="card-flipper">
        <ul id="dataNums">
          {
            list.map((d, idx) => {
              return <li key={idx}>
                <div className="dataBoc">
                  <div className="tt" style={{ transition: `all 10s ease-in-out ${idx * 0.3}s`, top: `${-d.top}px` }}>
                    {
                      numList.map(num => React.Children.toArray(
                        <span >{num}</span>
                      ))
                    }
                  </div>
                </div>
              </li>
            })
          }
        </ul>

      </div>
    </div>
  );
}

export default CardFlipper;
