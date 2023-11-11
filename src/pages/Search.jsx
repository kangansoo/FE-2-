import React from 'react'
import {NavLink} from "react-router-dom";

export default function Search() {
  return (
    <div>
      검색 페이지
      <div>
        
        <label>
          <span>
            <NavLink to = "/genre">
              액션
            </NavLink>
          </span>
        </label>

        <label>
          <span>
            <NavLink to = "/genre">
              SF
            </NavLink>
          </span>
        </label>

        <label>
          <span>
            <NavLink to = "/genre">
              로맨스
            </NavLink>
          </span>
        </label>

      </div>
    </div>
  )
}
