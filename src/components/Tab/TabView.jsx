import FAQS from "../FAQ/FAQ";
import { useState } from "react";

const TabView = () => {
  const [activeTab, setActiveTab] = useState('FAQ');
  return (
    <>
    {/* <div className="border-solid border-2 border-black p-5 rounded-lg">  
    <Tabs aria-label="Default tabs">
      <Tabs.Item active title="FAQ" className="text-center border-b-2 border-transparent hover:border-gray-400"
          activeClassName="border-b-2 border-black" icon={HiUserCircle}>
       <FAQS/>
      
      </Tabs.Item>
      <Tabs.Item title="Dashboard" className="text-center" icon={MdDashboard}>
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      
    </Tabs>
    </div> */}

    <div className="shadow-xl p-5 rounded-lg">
      <div className="flex justify-center space-x-4 border-b-2 border-gray-300">
        <button
          className={`pb-2 mx-4 font-bold text-lg  ${
            activeTab === 'FAQ' ? 'border-b-2 border-black' : 'border-transparent'
          }`}
          onClick={() => setActiveTab('FAQ')}
        >
          FAQ
        </button>
        <button
          className={`pb-2  mx-4 font-bold text-lg ${
            activeTab === 'Dashboard' ? 'border-b-2 border-black' : 'border-transparent'
          }`}
          onClick={() => setActiveTab('Dashboard')}
        >
          Dashboard
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'FAQ' && <div>
          <FAQS/>
        </div>}
        {activeTab === 'Dashboard' && <div className="p-3 font-serif font-medium justify-center">This is the Dashboard tab content.This is the Dashboard tab content.This is the Dashboard tab content.
          This is the Dashboard tab content.This is the Dashboard tab content.This is the Dashboard tab content.This is the Dashboard tab content.
          This is the Dashboard tab content.This is the Dashboard tab content.This is the Dashboard tab content.This is the Dashboard tab content.
        
        </div>}
      </div>
    </div>

        
    </>
  )
}

export default TabView;