import Head from 'next/head'

export default function Home() {
  const users = [
    {
      nickname: '기매용',
      image: '',
      fullAddress: ['서울시', '양천구', '목동'],
      tags: '동네친구사귀기',
      kakaoLink: '',
    },
    {
      nickname: '나무',
      image: '',
      fullAddress: ['서울시', '양천구', '목동'],
      tags: '정보공유',
      kakaoLink: '',
    },
  ]
  return (
    <div className='container'>
      <Head>
        <title>where is my vegan friend</title>
      </Head>

      <main>
        <h1>where is my vegan friend</h1>
        {users.map((user) => (
          <div className='profile'>
            <div>{user.nickname}</div>
            {user.fullAddress.map((address) => (
              <span>{address} </span>
            ))}
          </div>
        ))}
      </main>

      <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: green;
            border: solid 5px;
          }

          .profile {
            border: solid 1px #ccc;
            padding: 10px;
            margin: 5px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
