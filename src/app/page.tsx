import Image from "next/image";
import React from "react";
import { Button } from "./../components/ui/button"


export default function Home() {
  return (
 
    <main className="flex flex-col justify-center items-center justify-items-center h-screen bg-slate-100">
      <div className="flex flex-col justify-center items-center mx-auto p-5 gap-2.5 border w-[199px] m-8 shadow-lg shadow-indigo-500/20 bg-white">

        {/* Typography used with Tailwind */}
        <Button variant="primary" className="font-robertRegular">Continue</Button>

        <Button variant="destructive">Destructive</Button>

        <Button variant="primary" className="gap-2 font-robertRegular">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3334 3.16667H2.66671C1.93033 3.16667 1.33337 3.76362 1.33337 4.5V12.5C1.33337 13.2364 1.93033 13.8333 2.66671 13.8333H13.3334C14.0698 13.8333 14.6667 13.2364 14.6667 12.5V4.5C14.6667 3.76362 14.0698 3.16667 13.3334 3.16667Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.6667 5.16667L8.68671 8.96667C8.48089 9.09562 8.24292 9.16401 8.00004 9.16401C7.75716 9.16401 7.51919 9.09562 7.31337 8.96667L1.33337 5.16667" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Login with Email</span>
        </Button>

        <Button variant="disable" className="gap-2 font-robertRegular"> 
          <svg className="animate-spin" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1_274" fill="white">
            <path d="M15.1263 12.1354C15.9536 10.5135 16.203 8.65803 15.8333 6.87531C15.4635 5.09259 14.4968 3.48932 13.0927 2.33032C11.6886 1.17132 9.93112 0.52593 8.11064 0.50075C6.29016 0.47557 4.51554 1.07211 3.07992 2.19183C1.6443 3.31155 0.633553 4.88747 0.214642 6.65928C-0.20427 8.43109 -0.00628785 10.2928 0.775885 11.9369C1.55806 13.5809 2.87763 14.909 4.51663 15.7018C6.15564 16.4946 8.01602 16.7045 9.79049 16.297L9.5142 15.0938C8.01355 15.4385 6.44025 15.2609 5.05417 14.5905C3.66808 13.92 2.55214 12.7969 1.89067 11.4065C1.22919 10.0161 1.06176 8.44172 1.41603 6.94333C1.7703 5.44493 2.62507 4.1122 3.83916 3.16527C5.05324 2.21833 6.55401 1.71385 8.09357 1.73514C9.63313 1.75644 11.1194 2.30224 12.3068 3.28239C13.4942 4.26254 14.3118 5.6184 14.6245 7.12602C14.9372 8.63364 14.7263 10.2028 14.0266 11.5744L15.1263 12.1354Z"/>
            </mask>
            <path d="M15.1263 12.1354C15.9536 10.5135 16.203 8.65803 15.8333 6.87531C15.4635 5.09259 14.4968 3.48932 13.0927 2.33032C11.6886 1.17132 9.93112 0.52593 8.11064 0.50075C6.29016 0.47557 4.51554 1.07211 3.07992 2.19183C1.6443 3.31155 0.633553 4.88747 0.214642 6.65928C-0.20427 8.43109 -0.00628785 10.2928 0.775885 11.9369C1.55806 13.5809 2.87763 14.909 4.51663 15.7018C6.15564 16.4946 8.01602 16.7045 9.79049 16.297L9.5142 15.0938C8.01355 15.4385 6.44025 15.2609 5.05417 14.5905C3.66808 13.92 2.55214 12.7969 1.89067 11.4065C1.22919 10.0161 1.06176 8.44172 1.41603 6.94333C1.7703 5.44493 2.62507 4.1122 3.83916 3.16527C5.05324 2.21833 6.55401 1.71385 8.09357 1.73514C9.63313 1.75644 11.1194 2.30224 12.3068 3.28239C13.4942 4.26254 14.3118 5.6184 14.6245 7.12602C14.9372 8.63364 14.7263 10.2028 14.0266 11.5744L15.1263 12.1354Z" stroke="white" stroke-width="2" mask="url(#path-1-inside-1_1_274)"/>
          </svg>            
          <span>Loading</span>
        </Button>

        <Button variant="outline" className="text-black-blue font-robertRegular">Cancel</Button>

        <Button variant="subtle" className="text-black-blue font-robertRegular">Subtle</Button>

        <Button variant="ghost" className="text-black-blue font-robertRegular">Ghost</Button>

        <Button variant="link" className="text-black-blue font-robertRegular">Link</Button>

        <Button variant="outline" className="text-[#0F172A] p-2 w-8 h-8 font-robertRegular ">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.33331V12.6666" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33337 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Button>

        <Button variant="outline" className="text-[#0F172A] p-3 w-10 h-10 font-robertRegular">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.33331V12.6666" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33337 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Button>

      </div>
    </main>
  );
}
