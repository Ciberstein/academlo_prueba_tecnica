import React from 'react'

export const StepBar = ({ step }) => {
  return (
    <div className='app__step__bar'>
        <div className={`app__step__bar__circle ${ step > 1 ? 'app__step__bar__circle__done' : null } ${ step === 1 ? 'app__step__bar__circle__active' : null }`}>
            <div className='app__step__bar__icon'>
                { step > 1 ? <i className="fa-solid fa-check"></i> : null }
                { step == 1 ? <i className="fa-solid fa-circle"></i> : null }
            </div>
        </div>
        <div className={`app__step__bar__line ${ step >= 2 ? 'app__step__bar__line__active' : null }`}></div>
        <div className={`app__step__bar__circle ${ step > 2 ? 'app__step__bar__circle__done' : null } ${ step === 2 ? 'app__step__bar__circle__active' : null }`}>
            <div className='app__step__bar__icon'>
                { step > 2 ? <i className="fa-solid fa-check"></i> : null }
                { step == 2 ? <i className="fa-solid fa-circle"></i> : null }
            </div>
        </div>
        <div className={`app__step__bar__line ${ step >= 3 ? 'app__step__bar__line__active' : null }`}></div>
        <div className={`app__step__bar__circle ${ step > 3 ? 'app__step__bar__circle__done' : null } ${ step === 3 ? 'app__step__bar__circle__active' : null }`}>
            <div className='app__step__bar__icon'>
                { step > 3 ? <i className="fa-solid fa-check"></i> : null }
                { step == 3 ? <i className="fa-solid fa-circle"></i> : null }
            </div>
        </div>
    </div>
  )
}
