import React from 'react'
import { FaAndroid, FaJava } from 'react-icons/fa'
import { SiKotlin, SiJetpackcompose } from 'react-icons/si'

function Technology() {
  return (
    <div className="flex-col flex text-white items-start gap-4 font-bold">
      <h2 className="items-start text-2xl m-0">Tecnologias</h2>

      <div className="flex-wrap flex gap-4">
        <div className="flex-wrap flex items-start bg-green-700 rounded-md p-3 gap-2">
          <span>
            <div className="text-2xl">
              <FaAndroid />
            </div>
          </span>

          <p>Android Studio</p>
        </div>

        <div className="flex-wrap flex items-start bg-green-700 rounded-md p-3 gap-2">
          <span>
            <div className="text-2xl">
              <SiKotlin />
            </div>
          </span>

          <p>Kotlin</p>
        </div>

        <div className="flex-wrap flex items-start bg-green-700 rounded-md p-3 gap-2">
          <span>
            <div className="text-2xl">
              <FaJava />
            </div>
          </span>

          <p>Java</p>
        </div>

        <div className="flex-wrap flex items-start bg-green-700 rounded-md p-3 gap-2">
          <span>
            <div className="text-2xl">
              <SiJetpackcompose />
            </div>
          </span>

          <p>Jetpack Compose</p>
        </div>
      </div>
    </div>
  )
}

export default Technology
