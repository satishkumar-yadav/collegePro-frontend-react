import logo from '../assets/logo.png';
import '../styles/footer.css';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 pt-6 pb-2 mt-12">
      <div className="flex flex-wrap justify-between px-6">
        <div>
          <h4 className="font-bold mb-2">Contact & Address</h4>
          <p>My Engineering College, NH 98, Patna, Bihar - 801503</p>
          <p>Tel: +91-1234567890 | Email: info@college.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Campus Directory</li>
            <li>Career</li>
            <li>Job Opportunities</li>
            <li>Emergency Info</li>
          </ul>
        </div>

        <div>
           <div>
              <h4 className="font-bold mb-2">Connect</h4>
              <a href="#" className="mr-2">Facebook</a>
              <a href="#" className="mr-2">Instagram</a>
              <a href="#">Twitter</a>
           </div>
           <div className='mt-2'>
                   <iframe
                     title="college map"
                     className="w-50 h-30 rounded"
                     src="https://maps.google.com/maps?q=college&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
            </div>
        </div>
      </div>
      <div className="flex  items-center px-6 mt-6 text-xs border-t border-gray-700 pt-2">
       {/* <span>Copyright © 2025 My Engineering College</span>  */ }
          <img src={logo} alt="College Logo" className="college-logo" /> 
          <p className="college-name">&copy; {new Date().getFullYear()} My Engineering College, Patna</p> 
        
      </div>
    </footer>
  );
}


/*

 <footer style={{textAlign:'center', padding:'20px', backgroundColor: '#da222', color: 'black'}}>
             <div className="bottom-bar">
                    <img src={logo} alt="College Logo" className="college-logo" />
                   <p className="college-name">&copy; {new Date().getFullYear()} ABC Institute of Technology, Patna</p>
                  </div>
            
        </footer>   

        */