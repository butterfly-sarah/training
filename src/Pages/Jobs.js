import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Jobsstyle.css'
export default function Jobs(){
    const jobs = [
        {id:1, title: 'Front-end React JS Developer', location: 'New York', jobType: 'Full-time', jobLevel: 'Entry-level', salary: 5000 ,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        {id:2, title: 'Back-end  JS Developer', location: 'New York', jobType: 'Part-time', jobLevel: 'Entry-level', salary: 5000,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        {id:3, title: 'Front-end React JS Developer', location: 'San Francisco', jobType: 'Part-time', jobLevel: 'Intermediate', salary: 8000,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        {id:4, title: 'Front-end React JS Developer', location: 'New York', jobType: 'Remote', jobLevel: 'Expert', salary: 12000,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        {id:5, title: 'Front-end React JS Developer', location: 'New York', jobType: 'Full-time', jobLevel: 'Entry-level', salary: 5000,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        {id:6, title: 'Back-end  JS Developer', location: 'San Francisco', jobType: 'Part-time', jobLevel: 'Intermediate', salary: 8000,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        {id:7, title: 'Back-end  JS Developer', location: 'New York', jobType: 'Full-time', jobLevel: 'Expert', salary: 12000,data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",req:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
      ];
      var jobData=jobs;
      var [location,setLocation]=useState("");
      var [jobType,setJobType]=useState([]);
      var [jobLevel,setjobLevel]=useState([]);
      var [salaryRange,setSalaryRange]=useState([]);
      var [details,setDetails]=useState(false);
      var [form,setForm]=useState(false);
      var [currentJob,setCurrentJob]=useState({});
      var selectRef=useRef(null)
      var handleClear=()=>{
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        checkboxes.forEach(checkbox => checkbox.checked = false); 
        setLocation("");
        setJobType("");
        setjobLevel("");
        setSalaryRange("");
        selectRef.current.value=""
      }
      var handleDetails=(id)=>{
        setDetails(true)
        var job=jobs.find((el)=>el.id==id);
        setCurrentJob(job)
      }
      var data=jobData
      if(location){
        data=data.filter((el)=>el?.location?.includes(location))
      }
      if(jobType.length>0){
        var arr=[]
            for (let item of jobType) {
                for (let el of data){
                    if (el?.jobType?.includes(item)){
                        arr.push(el)
                    }
                }
            }
            data=arr
        }
      if(jobLevel.length>0){
        var arr=[]
            for (let item of jobLevel) {
                for (let el of data){
                    if (el?.jobLevel?.includes(item)){
                        arr.push(el)
                    }
                }
            }
            data=arr
        }
      if(salaryRange.length>0){
        var arr=[]
            for (let item of salaryRange) {
                for (let el of data){
                    var tot;
                    if (el.salary < 4000) {
                        tot= '4000';
                      } else if (el.salary >= 4000 && el.salary <= 10000) {
                        tot= '4000-10000';
                      } else {
                        tot= '10000';
                      }
                    if (tot==item){
                        arr.push(el)
                    }
                }
            }
            data=arr
        }
        jobData=data
return(
    <div className="body">
      <div className="joboverlay"></div>
      <div className="position-relative">
    <div class="userBar mb-5 bg-black"></div>
      <nav class="navbar bg-black mt-5 navbar-expand-lg">
        <div class="container"></div>
      </nav>
      <div class="container">
      <div class="date bg-black mt-5 mb-4"></div>
    </div>
    <div class="d-flex flex-row container mb-5 justify-content-between ">
      <div class="jobLooking bg-black"></div>
      <div class="searchBox flex-end bg-black"></div>
    </div>
       
            
        <div class="container filter-side d-flex bd-highlight ">
          <div>
            <aside class="job-filter pb-5">
              <div class="filter-head d-flex bg-black p-2 align-items-baseline rounded">
              <h2 class="text-white mr-5 fs-5">Filters</h2>
              <button id="clear-filter" class="btn filter-btn" onClick={handleClear}>Clear All</button>
            </div>
            <div class="p-4">
              <div class="filter-item">
              <label for="location" class="text-white">Location:</label>
              <select id="location" class="form-select bg-secondary text-light border-0" ref={selectRef} onChange={(e)=>setLocation(e.target.value)}>
                <option value="">All</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
              </select>
              </div>
        <div class="filter-item">
              <label class="text-white">Job Type:</label>
<div class="form-check">
  <input type="checkbox" id="full-time" class="form-check-input" name="jobType" value="Full-time" onChange={(e)=>{e.target.checked?setJobType([...jobType,e.target.value]):setJobType ( jobType.filter(item => item !== e.target.value))}}/>
  <label for="full-time" class="form-check-label text-white">Full-time</label>
</div>
<div class="form-check">
  <input type="checkbox" id="part-time" class="form-check-input" name="jobType" value="Part-time" onChange={(e)=>{e.target.checked?setJobType([...jobType,e.target.value]):setJobType ( jobType.filter(item => item !== e.target.value))}}/>
  <label for="part-time" class="form-check-label text-white">Part-time</label>
</div>
<div class="form-check">
  <input type="checkbox" id="remote" class="form-check-input" name="jobType" value="Remote" onChange={(e)=>{e.target.checked?setJobType([...jobType,e.target.value]):setJobType ( jobType.filter(item => item !== e.target.value))}}/>
  <label for="remote" class="form-check-label text-white">Remote</label>
</div>
</div>
<div class="filter-item">
<label class="text-white">Job Level:</label>
<div class="form-check">
  <input type="checkbox" id="entry-level" class="form-check-input" name="jobLevel" value="Entry-level" onChange={(e)=>{e.target.checked?setjobLevel([...jobLevel,e.target.value]):setjobLevel ( jobLevel.filter(item => item !== e.target.value))}}/>
  <label for="entry-level" class="form-check-label text-white">Entry Level</label>
</div>
<div class="form-check">
  <input type="checkbox" id="intermediate" class="form-check-input" name="jobLevel" value="Intermediate" onChange={(e)=>{e.target.checked?setjobLevel([...jobLevel,e.target.value]):setjobLevel ( jobLevel.filter(item => item !== e.target.value))}}/>
  <label for="intermediate" class="form-check-label text-white">Intermediate</label>
</div>
<div class="form-check">
  <input type="checkbox" id="expert" class="form-check-input" name="jobLevel" value="Expert" onChange={(e)=>{e.target.checked?setjobLevel([...jobLevel,e.target.value]):setjobLevel ( jobLevel.filter(item => item !== e.target.value))}}/>
  <label  class="form-check-label text-white">Expert</label>
</div>
</div>
<div class="filter-item">
<label class="text-white">Salary Range:</label>
<div class="form-check">
  <input type="checkbox" id="salary-1" class="form-check-input" name="salaryRange" value="4000" onChange={(e)=>{e.target.checked?setSalaryRange([...salaryRange,e.target.value]):setSalaryRange ( salaryRange.filter(item => item !== e.target.value))}}/>
  <label for="salary-1" class="form-check-label text-white">Less than $4000</label>
</div>
<div class="form-check">
  <input type="checkbox" id="salary-2" class="form-check-input" name="salaryRange" value="4000-10000" onChange={(e)=>{e.target.checked?setSalaryRange([...salaryRange,e.target.value]):setSalaryRange ( salaryRange.filter(item => item !== e.target.value))}}/>
  <label for="salary-2" class="form-check-label text-white">$4000 - $10000</label>
</div>
<div class="form-check">
  <input type="checkbox" id="salary-3" class="form-check-input" name="salaryRange" value="10000" onChange={(e)=>{e.target.checked?setSalaryRange([...salaryRange,e.target.value]):setSalaryRange ( salaryRange.filter(item => item !== e.target.value))}}/>
  <label for="salary-3" class="form-check-label text-white">More than $10000</label>
</div>
</div>
</div>
            </aside>
            <div class="mt-4">
              <button class="btn cv-btn text-light">CREATE YOUR CV</button>
            </div>
          </div>
            
            <div class="pl-3 mx-3 flex-grow-1">
            { !details&&
            jobData.map((job,index)=>(
              <div class="div1 m-3"> 
                <div class="dd-info">
                <span class="spn">IT</span>
                <h2>{job.title}</h2>
                <p>IT solution , {job.location}</p>
              </div>
              <div class="info2"><h5>{job.salary} per month</h5>
                <p class="pi"> <i class="loc fas fa-map-marker-alt"></i> On Site</p>
              </div>
                <p class="p-general">{job.data}</p>
                <button class="btn">React JS</button>
                <button class="btn">Develpment</button>

              <div class="view-details">
                <p class="p-details"><i class=" clock far fa-clock"></i>  2 h ago</p>
                <button class="btn-details" onClick={()=>handleDetails(job.id)}>VIEW DETAiLS</button>
              </div>
              </div>
                // <div>
                //     <h3>${job.title}</h3>
                //     <p>Location: {job.location}</p>
                //     <p>Job Type: {job.jobType}</p>
                //     <p>Job Level: {job.jobLevel}</p>
                //     <p>Salary: ${job.salary}</p>
                //     <button onClick={()=>handleDetails(job.id)}>details</button>
                // </div>
                ))}
            { details&&!form&&
                <div class="div1 m-3"> 
                <div class="dd-info">
                <span class="spn">IT</span>
                <h2>{currentJob.title}</h2>
                <p>IT solution , {currentJob.location}</p>
              </div>
              <div class="info2"><h5>{currentJob.salary} per month</h5>
                <p class="pi"> <i class="loc fas fa-map-marker-alt"></i> On Site</p>
              </div>
                <p class="p-general">{currentJob.data}</p>
                <button class="btn">React JS</button>
                <button class="btn">Develpment</button>

              <div class="view-details">
                <p class="p-details"><i class=" clock far fa-clock"></i>  2 h ago</p>
                <h2 className="d-block">About us</h2>
                <p class="p-details2">
                  {currentJob.about}
                </p>
                <h2>Job Description</h2>
                <p class="p-details2">
                  {currentJob.desc}
                </p>
                <h2>Job Requirements</h2>
                <p class="p-details2">
                  {currentJob.req}
                </p>
                <button class="btn-details" onClick={()=>setForm(true)}>Apply</button>
              </div>
              </div>
                }
                { form&&
                <div class="view-details3">
                <p ><i class=" clock far fa-clock"></i>  2 h ago</p>
                <form action="/action_page.php">
                 <div class="form-group3">
                   <label for="email" class="lab1">Email</label>
                   <label for="num"  class="lab2">Years Of Experience</label>
                   <input type="email" class="form-control inp1" id="email"  name="email"/>
                   <input type="number" class="form-control inp2" id="num"  name="num"/>
                   <br/>
                   <label for="num3"  class="lab3">Mobile Number</label>
                   <input type="number" class="form-control inp3" id="num3"  name="num3"/>
                   <label for="files" class="lab4">Uploud CV</label>
                   <div class="uploud-cv">
                     <i class="i-uploud fas fa-cloud-upload-alt"></i>
                     <br/>
                     <span class="drag-drop">Drag & Drop files or <a href="#" class="browse-link">Browse</a></span>
                     <h6 class="p-uploud">
                       supported formates:JPEG,
                       PNG,GIF,MP4,PDF,PSD,Al,Word,PPT
                     </h6>
                   </div>
                 </div>
                 <button class="cancel">Cancel</button>
                 <button class="submit">Submit</button>
               </form>
               </div>
                }
            </div>
          </div>
          </div>
    </div>
)
}