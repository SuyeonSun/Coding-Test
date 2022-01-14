import Link from "next/link";

export default function Header() {
    return (
      <div>
        <div className="titlebox">
            <div className='title'>
              <Link href='/'><a style={{textDecoration:'none', color:'white'}}><b>FOOD STORE INFORMATION</b></a></Link>
            </div>
        </div>
      </div>
    )
  }