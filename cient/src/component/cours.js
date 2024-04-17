



export default function Course(){
    return(
        <>
       <div className="container-fluid"> 
    <div className="row">
        <div className="col-lg-8">
            <h2>Course information</h2>
           
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="course" />
            </div>
           
           <div className="row">

            <div className="form-group col-lg-6">
                <label className="b-5">Catagory</label>
               <div>
                 <select className="bg-light" style={{ width: '100%' }}
                ><option>Data management</option>
                <option>data science</option>
                <option>artificial inteligence</option></select></div>
            </div>
            <div className="form-group col-lg-6">
                <label>Level</label>
<div>
    <select className="bg-light" style={{ width: '100%' }}> <option>Data management</option>
                <option>data science</option>
                <option>artificial inteligence</option></select></div>
            </div>
           </div>
            
            <div className="">
                 <label>Description</label>
                 <div>

                 <input type='text-area' style={{ width: '100%',height:'50vh' }}></input>
                 </div>
            </div>
          
        </div>
    </div>
</div>
        </>
    )
}