
function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200 py-10 px-[5%] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              &lt;/&gt;
            </div>
            <span className="text-xs font-medium text-slate-600">
              Safidy &copy; {new Date().getFullYear()} — Portfolio React & Tailwind CSS.
            </span>
          </div>
        </div>
      </footer>
  )
}

export default Footer
