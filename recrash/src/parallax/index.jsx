import React, { useState } from 'react';
import ChatNotification from '../components/chatnotification';
import ProfileCard from '../components/profile_card';

const LandingPage = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`relative min-h-screen bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1599936427850-8a716d5057dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)` }}>
      <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} absolute top-0 left-0 w-full h-full`} style={{ opacity: 0.5 }} />
      <div className="container mx-auto py-20 px-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          <input type="checkbox" className="mr-2" checked={isDarkMode} onChange={() => setDarkMode(!isDarkMode)} />
          Dark mode
        </label>
        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Landing Page</h1>
        <p className={`text-lg font-medium mt-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Welcome to our landing page</p>
        <div className="mt-10">
          <div className="relative">
            <div className="absolute bottom-0 left-0 right-0 w-full h-64 bg-center bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1599936427850-8a716d5057dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)` }} />
            <div className="absolute top-0 left-0 right-0 w-full h-64 bg-center bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1599936427850-8a716d5057dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)` }} />
            <div className="relative z-10">
              <div className="flex justify-between">
                <div className="w-1/3 mr-2">
                  <div className="p-10 bg-white shadow-md hover:animate-pulse">
                    <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Title</h2>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in congue feugiat, sapien urna egestas dui, eu gravida nisl magna eu tellus. Sed id metus id metus consectetur sollicitudin.</p>
                  </div>
                </div>
                <div className="w-1/3 mx-2">
                  <div className="p-10 bg-white shadow-md hover:animate-pulse">
                    <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Title</h2>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in congue feugiat, sapien urna egestas dui, eu gravida nisl magna eu tellus. Sed id metus id metus consectetur sollicitudin.</p>
                  </div>
                </div>
                <div className="w-1/3 ml-2">
                  <div className="p-10 bg-white shadow-md hover:animate-pulse">
                    <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Title</h2>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in congue feugiat, sapien urna egestas dui, eu gravida nisl magna eu tellus. Sed id metus id metus consectetur sollicitudin.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <ChatNotification />
              </div>
              <div className="flex justify-between">
                <div className="w-1/3 mr-2">
                  <div className="p-10 bg-white shadow-md hover:animate-pulse">
                    <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Title</h2>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in congue feugiat, sapien urna egestas dui, eu gravida nisl magna eu tellus. Sed id metus id metus consectetur sollicitudin.</p>
                  </div>
                </div>
                <div className="w-1/3 mx-2">
                  <div className="p-10 bg-white shadow-md hover:animate-pulse">
                    <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Title</h2>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in congue feugiat, sapien urna egestas dui, eu gravida nisl magna eu tellus. Sed id metus id metus consectetur sollicitudin.</p>
                  </div>
                </div>
                <div className="w-1/3 ml-2">
                  <div className="p-10 bg-white shadow-md hover:animate-pulse">
                    <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Card Title</h2>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna in congue feugiat, sapien urna egestas dui, eu gravida nisl magna eu tellus. Sed id metus id metus consectetur sollicitudin.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
