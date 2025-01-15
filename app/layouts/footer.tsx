export default function Footer() {
    const currentYear = new Date().getFullYear();
   
    return (
     <div className="py-4 mt-5 text-sm text-center text-gray-200 bg-gray-800">
      &copy; Akakçe {currentYear} 
     </div>
     );
   }