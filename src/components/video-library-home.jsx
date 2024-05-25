
export function VideoLibraryHome()
{
    return(
        <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center">
             <main className='text-center'>
               <h1>Watch Technology Videos</h1>
               <p>Any where any time</p>
               <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email address" />
                  <button className="btn btn-danger">Get Started <span className="bi bi-chevron-right"></span> </button>
               </div>
             </main>
        </div>
    )
}