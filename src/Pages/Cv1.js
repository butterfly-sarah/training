import React, { useEffect, useRef, useState } from 'react'
import '../styles/Cv1style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Cv1() {
    var formSteps = document.getElementsByClassName("form-step")
    var formStepss = Array.from(document.getElementsByClassName("form-step"))
    var progressSteps =   Array.from(document.getElementsByClassName("steper-number"))
    var dragdrop = Array.from( document.getElementsByClassName("drag-drop"))
    var container = document.getElementsByClassName("test")
    
    var nextBtn=useRef(null)
    var previusBtn=useRef(null)
    var [formstepnum,setFormstepnum]=useState(0)
    var [formStep,setFormStep]=useState(true)
    var [addClassNext,setAddClassNext]=useState(false)
    var [downloadCv,setDownloadCv]=useState(false)
    
    const handleNext=()=>{
        container[0].scrollLeft += 150;
        setFormstepnum(formstepnum+1)
        updateFormSteps();
        updateStepper();
        setFormStep(true)
        if ((formstepnum + 1) == progressSteps.length){
            setAddClassNext(true)
            setDownloadCv(true)
        }
    
    }
    const handlePrev=()=>{
        container[0].scrollLeft -= 150;
        setFormstepnum(formstepnum-1)
        updateFormSteps();
        updateStepper();
        if ((formstepnum + 1) > 1) {
            setAddClassNext(false)
            setDownloadCv(false)
        }
    if ((formstepnum + 1) == 1) {
        setFormStep(false)
        }
    }
    const updateFormSteps=()=>{
        formStepss.forEach((formstep)=>{
            formstep.classList.contains("form-step-active") &&
            formstep.classList.remove("form-step-active")
        });
        formSteps[formstepnum].classList.add("form-step-active")
    }
    
    const updateStepper=()=>{
        progressSteps.forEach((progressStep,idx)=>{
            if(idx < formstepnum +1){
                progressStep.classList.add('progress-step-active');
    
            }else{
                progressStep.classList.remove('progress-step-active');
    
            }
        })
    }
    // updateFormSteps();
  return (
  <>
        {/* <!-- header --> */}
        <nav class="first-nav"></nav>
    
        {/* <!-- main section --> */}
         <section class="main-sec">
            <div class="overlay"></div>
            <div class="container">
                <nav class="second-nav"></nav>
                <div class="create-cv"></div>
    
                {/* <!-- the task --> */}
    
    
                <div class="steper-sec">
                    <div class="steper-title">
                        <h2>Customize your cv</h2>
                        <p>Here you can create your CV by answering questions and getting it ready for download or applying to jobs through the platform.</p>
                    </div>
                     <div class="test container   d-flex">
    
                        <div class="item item1  col-lg-3  m-1">
                            <div class="steper-number progress-step-active">1</div>
                            <div class="steper-info">main information</div>
                        </div>
                        <div class="item item2 col-lg-3  m-1">
                            <div class="steper-number ">2</div>
                            <div class="steper-info">summary</div>
                        </div>
                        <div class="item item3 col-lg-3 m-1">
                            <div class="steper-number ">3</div>
                            <div class="steper-info">skills</div>
                        </div>
                        <div class="item  col-lg-3 m-1"  >
                            <div class="steper-number " >4</div>
                            <div class="steper-info">Experience</div>
                        </div>
                        <div class="item  col-lg-3  m-1">
                            <div class="steper-number ">5</div>
                            <div class="steper-info">Education</div>
                        </div>
                        <div class="item  col-lg-3  m-1">
                            <div class="steper-number ">6</div>
                            <div class="steper-info">Honers & Awards</div>
                        </div>
                        <div class="item  col-lg-3  m-1">
                            <div class="steper-number ">7</div>
                            <div class="steper-info">Hobbies & Interests</div>
                        </div>
                        <div class="item item8 col-lg-3  m-1">
                            <div class="steper-number ">8</div>
                            <div class="steper-info">links</div>
                        </div>
                        
                     </div>
                   
    
    
    
    
                    <div class="cv-progress g-1 ">
    
                        <div class="col-lg-5 d-flex flex-column ">
                             <div class="cv-progress-item information-sec form-step form-step-active  " >
                                
    
                            <h2>Personal Information</h2>
                            <form>
                                <div class="d-flex gap-3">
                                    <div class="form-group">
                                    <label for="firstName">First Name:</label>
                                    <input type="text" id="firstName" name="firstName" required/>
                                </div>
    
                                <div class="form-group">
                                    <label for="lastName">Last Name:</label>
                                    <input type="text" id="lastName" name="lastName" required/>
                                </div>
                                </div>
                            
                                <div class="d-flex gap-3">
                                    <div class="form-group">
                                    <label for="profession">Profession:</label>
                                    <input type="text" id="profession" name="profession"/>
                                </div>
    
                                <div class="form-group">
                                    <label for="country">Country:</label>
                                    <select id="country" name="country">
                                        <option value="usa">United States</option>
                                        <option value="canada">Canada</option>
                                        <option value="uk">United Kingdom</option>
                                        {/* <!-- Add more countries as needed --> */}
                                    </select>
                                </div>
                                </div>
                            
                                <div class="d-flex gap-3">
                                    <div class="form-group">
                                    <label for="city">City:</label>
                                    <input type="text" id="city" name="city"/>
                                </div>
    
                                <div class="form-group">
                                    <label for="mobile">Mobile Number:</label>
                                    <input type="text" id="mobile" name="mobile"/>
                                </div>
                                </div>
                                
                                <div class="d-flex gap-3">
                                    <div class="form-group">
                                    <label for="state">State:</label>
                                    <input type="text" id="state" name="state"/>
                                </div>
    
                                <div class="form-group">
                                    <label for="birthday">Birthday:</label>
                                    <input type="date" id="birthday" name="birthday"/>
                                </div>
                                </div>
    
                            
    
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required/>
                                </div>
    
                                
                            </form>
    
                           
                        </div>
                            <div class="form-step blanck-form " >summary</div>
                            <div class="form-step blanck-form " >skills</div>
                            <div class="form-step blanck-form " >experience</div>
                            <div class="form-step blanck-form " >education</div>
                            <div class="form-step blanck-form " >Honers & Awards</div>
                            <div class="form-step blanck-form " >Hobbies & Interests</div>
                            <div class="form-step blanck-form " >links</div>
                        
    
                        <div className={formStep ? 'drag-drop' : ''}></div>
     </div>
                       
                       
    
                        <div class="cv-progress-item cv-design col-lg-5"></div>
                    </div>
    
                </div>
                     <div class="form-group formBtn ">
                        <button id="nextBtn" class={addClassNext?"btn next-btn":"btn"} ref={nextBtn} onClick={handleNext}>{downloadCv?"download cv":"continue"}</button>
                        <button id="previusBtn" class="btn " ref={previusBtn} onClick={handlePrev} disabled={(formstepnum==0)?true:false}>Back</button>
    
                     </div>
    
    
                     
    
    
    
    
            </div>
         </section>
    
    
    
    
        
    
         {/* <!-- footer --> */}
         <footer></footer>
    
    
    
    
    
        
    </>
    )
}

