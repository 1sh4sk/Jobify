import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

// SIMPLE EXAMPLE OF STYLE COMPONENT | STYLING ONLY THE ELEMENT
// const StyledBtn = styled.button`
// font-size: 1.5rem;
// background: red;
// color: white;
// `;

const Landing = () => {
    return (
        // <div>
        //     <h1>Landing</h1>
        //     <div className='content'>Some content</div>
        //     {/* SIMPLE EXAMPLE OF STYLED COMPONENT STYLING ONLY THE ELEMENT*/}
        //     {/* <StyledBtn>styled btn</StyledBtn> */}
        // </div>

        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illum, excepturi quia doloribus aliquid, fugiat voluptas asperiores aut eum facilis cum voluptatem possimus dolores officia ad hic quasi distinctio! Modi?
                    </p>
                    <Link to='/register' className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn'>
                        Login / Demo User
                    </Link>

                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}


// STYLING ENTIRE COMPONENT | CODE CAN BE ABOVE OR BELOW DOESN'T MATTER
// const Wrapper = styled.div`
// background: red;
// h1{
//     color: white;
// }
// .content{
//     background: blue;
//     color: yellow;
// }
// `;


// 3RD WAY IS TO CREATE A WRAPPER FILE AND IMPORT IT AT THE CORRESPONDING COMPONENT

export default Landing