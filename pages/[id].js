import {useRouter} from 'next/router';

export default function Detail() {
    const router = useRouter();

    return (
        <div className='contentboxouter'>
            <div className="titlebox2" style={{textDecoration:'none', color:'white'}}><b>{router.query.name}</b></div>
            
            <div className='contentbox'>

                <div className='content'>
                    <div className='content-img'>
                        <img src={router.query.image}/>
                    </div>
                    <div className='content-des'>
                        {router.query.description}
                    </div>
                </div>
                <div className='content-url'>
                    {
                        router.query.url
                        ? 
                        <>
                            <p> 사이트 바로가기 ▶️ {router.query.url} </p>
                        </>
                        : null
                    }
                </div>
            </div>

        </div>
    );
}