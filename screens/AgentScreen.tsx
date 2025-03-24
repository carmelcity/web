"use client";

import React, { useState, useEffect } from 'react'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { AgentCard } from '~/components/cards'
import { useCarmel } from '~/sdk'
import { Animation, MarkdownViewer, readexPro, DynamicIcon, showSuccessToast } from '~/elements';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const AgentScreen = ({ auth }: any) => {
    const router = useRouter()
    const itemId: any = router.query.id
    const repId: any = router.query.repid
    const carmel = useCarmel()
    const [output, setOutput] = useState<any>(undefined)
    const [sessionId, setSessionId] = useState('')
    const [started, setStarted] = useState(false)
    const [isComplete, setComplete] = useState(false)
    const [error, setError] = useState('')
    const [privId, setPrivId] = useState(repId)

    useEffect(() => {
      if (!repId) {
        return 
      }

      setComplete(true)
      setStarted(true)
      const url = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/carmel/genres/${repId}/output.md`
      setOutput({ url })
    }, [])

    // const handleSubmit = async (e: any) => {
    //   e.preventDefault();
  
    //   const formData = new FormData(e.target)
    //   const params = Object.fromEntries(formData.entries())
    //   const agent = getAgent()
      
    //   if (!agent) {
    //     return 
    //   }

    //   const { result } = await auth.agentAction("run", { params, name: agent.name.toLowerCase() })

    //   if (result.error) {
    //     return 
    //   }

    //   if (!result.id) {
    //     return 
    //   }

    //   setSessionId(result.id)
    //   setOutput({ url: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/carmel/genres/${result.privId}/output.md` })
    //   setPrivId(result.privId)
    //   setStarted(true)
    // }

    // const progress = () => {
    //   if (!sessionId || !carmel.data.agentsessions) {
    //     return 
    //   }

    //   return carmel.data.agentsessions.find((sess: any) => sess.id === sessionId)
    // }

    const getAgent = () => {
      if (carmel.isLoading || !carmel.data || !carmel.data.agents) return
      const item = carmel.data.agents.find((i: any) => i.name.toLowerCase() === itemId.toLowerCase())
      
      return item
    }

    // const AgentField = (field: any) => {
    //       return <div className="flex flex-col flex-col">
    //         <div className={`${readexPro.className} font-thin text-start text-sm leading-6 text-grey mb-2 mt-8`}>
    //           { field.title }:
    //         </div>
    //         <div className="flex flex-col relative mb-8">
    //             <input
    //               name={field.id}
    //               type={field.format}
    //               required
    //               placeholder={field.placeholder}
    //               className={`${
    //                 readexPro.className
    //               } font-thin lowercase focus:border-none focus:ring-[0.7px] focus:ring-[#00FFFF] placeholder:text-cyan/50 placeholder:font-light focus:placeholder:text-transparent w-full h-10 px-4 bg-[#022A27] text-sm text-white border border-primary/20 ${
    //                 'border-cyan/20'
    //               } border-solid border-1`}
    //               style={{
    //                 WebkitAppearance: 'none',
    //                 margin: 0,
    //                 MozAppearance: 'textfield',
    //               }}
    //             />
    //           </div>
    //       </div>
    // }

    // const AgentFields = () => {
    //   const agent = getAgent() 
      
    //   if (!agent) {
    //     return <div/>
    //   }
      
    //   return agent.params.map((field: any, i: number) => <AgentField key={`field_${i}`} {...field}/>)
    // }

    // const StartForm = ({ agent }: any) => {
    //   return <form method='post' onSubmit={handleSubmit} className='w-full flex flex-col items-center mt-8'>
    //          <div className='lg:max-w-[480px] border border-primary/20 bg-primary/10 p-4 w-full'>
    //          <div className='lg:text-xl text-lg mt-4 font-bold text-left text-primary'> 
    //             { agent.headline }
    //           </div>
    //           <AgentFields/>
    //           <div className={`${readexPro.className} flex text-white text-md text-center w-full mt-8 flex-row items-center justify-center`}>
    //                 <button type="submit" className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 flex flex-row py-2 shadow-early-access-button shrink-0`}>
    //                     <DynamicIcon name="PlayIcon" width={20} height={20} className='mr-1'/> { agent.action }
    //                 </button>
    //               </div>
    //               <div className={`${readexPro.className} flex text-white text-sm mt-2 text-center w-full flex-row items-center justify-center`}>
    //                   requires <span className='text-primary px-1 text-sm font-bold mt-1'>5</span> credits
    //               </div>
    //           </div>
    //       </form>
    // }

    // const ProgressStatus = ({ agent }: any) => {
    //   const updatedProgress = progress()

    //   if (!updatedProgress) {
    //     return <div/>
    //   }

    //   const { steps, stepId, duration, complete } = updatedProgress.progress

    //   if (complete) {
    //     return <div className='w-full flex flex-col items-center mb-4'>
    //         <div className='lg:text-xl text-lg mt-4 font-bold text-left text-primary'> 
    //             Complete            
    //         </div>
    //         <div className='text-md mt-2 font-bold text-left text-white'> 
    //             <Animation id="success"/>
    //         </div>
    //       </div>
    //   }

    //   const step = steps[stepId]

    //   return <div className='w-full flex flex-col items-center mb-4'>
    //     <div className='lg:text-xl text-lg mt-4 font-bold text-left text-primary'> 
    //         Step {stepId + 1} of { steps.length }
    //     </div>
    //     <div className='text-md mt-2 font-bold text-left text-white'> 
    //        { step.message }
    //     </div>
    //   </div>
    // }

    // const onCopyLink = () => {
    //   showSuccessToast("Copied to clipboard")
    // }

    // const Results = () => {
    //   const agent = getAgent()

    //   return <div className='w-full flex flex-col items-center mt-8 lg:mt-12'>
    //       <div className='lg:max-w-[640px] border border-primary/20 bg-primary/10 p-4 w-full'>
    //           <MarkdownViewer {...output}/>
    //       </div>
    //       <CopyToClipboard text={`${process.env['NEXT_PUBLIC_SITE_URL']}/agents/${agent.name.toLowerCase()}/${privId}`}>          
    //         <button onClick={onCopyLink} className={`${readexPro.className} text-nowrap text-sm md:text-md mt-8 mb-8 shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 flex flex-row py-2 shadow-early-access-button shrink-0`}>
    //               <DynamicIcon name="BookmarkIcon" width={20} height={20} className='mr-1'/> Copy permant link
    //         </button>
    //       </CopyToClipboard>
    // </div>
    // }

    // const ProgressPanel = ({ agent }: any) => {
    //   if (isComplete) {
    //     return <Results/>
    //   }

    //   const updatedProgress = progress()

    //   if (!updatedProgress) {
    //     return <div/>
    //   }

    //   const { complete } = updatedProgress.progress

    //   if (complete) {
    //     return <Results/>
    //   }

    //   return <div className='w-full flex flex-col items-center mt-8'>
    //             <div className='lg:max-w-[480px] border border-primary/20 bg-primary/10 p-4 w-full mb-8'>
    //                 <ProgressStatus agent={agent}/>
    //                 <Animation id="server" loop/>
    //             </div>
    //     </div>
    // }

    const isOnHome = () => {
      const agent = getAgent() 

      return (auth.isLoggedIn && 
             auth.profile.home && 
             auth.profile.home[agent.username])
    }

    const onAddToHome = async () => {
      if (!auth.isLoggedIn()) {
        router.push("/register")
        return
      }

      const agent = getAgent() 

      if (isOnHome()) {
        router.push(`/agent/${agent.username}`)
        return 
      }

      const result = await auth.accountAction("addtohome", {
        details: {
          ...agent,
          type: "agent"          
        }
      })

      await auth.getFreshProfile()

      router.push('/')
    }


    const AgentOutput = () => {
      const agent = getAgent() 

      if (!agent) {
        return <div/>
      }

      return <div className='mt-0 text-xl'>
          <div className='lg:mt-8 mt-4 lg:text-2xl text-lg font-bold text-left text-primary'> 
              { agent.intro }
          </div>
          
          <div className='lg:mt-8 mt-4 lg:text-lg text-lg text-left font-thin'> 
              { agent.summary }
          </div>
          {/* { started ? <ProgressPanel agent={agent}/> : <StartForm agent={agent}/> } */}
      </div>
    }

    const AgentPanel = () => {
      return <div className='flex w-full flex-col items-center justify-center'>
        <AgentOutput/>
      </div>
    }

    if (carmel.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    return <div className='w-full flex flex-col items-center lg:mt-0 mt-20 mb-20 p-4'>
      <div className='flex lg:flex-row flex-col w-full'>
         <AgentCard {...getAgent()} isOnHome={isOnHome} onAddToHome={onAddToHome} noAction wide isLoading={carmel.isLoading}>
            <AgentPanel/>
         </AgentCard>
      </div>
     </div>
  }