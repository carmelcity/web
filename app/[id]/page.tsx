// "use client";

// import { useParams } from 'next/navigation'
// import { Single as SingleCarmel } from '@/components/carmels/Single';
// import { Single as SingleInitiative } from '@/components/leaderboard/Single';
// import { Single as SingleGroup } from '@/components/groups/Single';
import { DefaultLoading } from '@/components/common/Loading'

// export const runtime = 'edge';

export default () => {
  // const params = useParams()
  // const account = useBaseSingle({ base: "accounts", id: params.id })

  // const isNumber = !isNaN(parseInt(`${params.id}`))

  // if (isNumber) {
  //   return <SingleCarmel id={params.id} />
  // }

  // if (!account.isReady) {
  //   return <DefaultLoading/>
  // }

  // // switch (account.details.type) {
  // //   case "initiative":
  // //     return <SingleInitiative { ...account.details }/>
  // //   case "group":
  // //     return <SingleGroup { ...account.details }/>
  // // }

  // return <SingleInitiative name={`${params.id}`}/>
  return <h1>coming soon</h1>
}

export async function generateStaticParams() {
  return [{ id: 'test' }]
}