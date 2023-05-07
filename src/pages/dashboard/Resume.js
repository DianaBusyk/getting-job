import React, { useRef, useState ,useEffect} from 'react'
import styled from 'styled-components'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useReactToPrint } from 'react-to-print'
import { Avatar, Print, Title, Descr, Range } from '../../components'
import { WrapperCont, Row, Sidebar, Content } from '../../assets/wrappers/Resume'


const Resume = () => {
  const [skillsCounter, setSkillsCounter] = useState(1)
  const [worksCounter, setWorksCounter] = useState(1)
  const componentRef = useRef()
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current
  })

  return (
    <>
      <Print onClick={handlePrintClick}></Print>
      <WrapperCont ref={componentRef}>
          <Row itemsCenter>
            <Sidebar >
              <Avatar />
            </Sidebar>
            <Content>
              <Title size={1}>User Name</Title>
              <Descr>
                Experienced Software & Machine Learning Engineer with a
                demonstrated history.
              </Descr>
            </Content>
          </Row>

          <Row>
            <Sidebar>
              <Title size='3' isUppercase>
                About me:
              </Title>
              <Descr>Software Engineer</Descr>
              <Descr isSecondary>Lviv | website.com</Descr>

              <Descr isPrimary style={{ marginTop: '3.6rem' }}>
                <AiOutlineMail style={{ marginRight: '0.6rem' }} />
                user@gmail.com
              </Descr>
              <Descr isPrimary>
                <AiOutlinePhone style={{ marginRight: '0.6rem' }} />
                +380 (50) 82-200-55
              </Descr>
            </Sidebar>

            <Content>
              <Title size='3' isUppercase>
                Education:
              </Title>
              <Descr>Lviv Ivan Franko National University</Descr>

              <Title
                size='3'
                isUppercase
                isShownBtn
                onClick={() => setWorksCounter(worksCounter + 1)}
              // style={{ marginTop: '3.6rem' }}
              >
                Work experience:
              </Title>
              {new Array(worksCounter).fill(1).map((_, i) => (
                <Descr key={i}>{i + 1}. Some position in your company </Descr>
              ))}

              <Title
                size='3'
                isUppercase
                isShownBtn
                onClick={() => setSkillsCounter(skillsCounter + 1)}
              // style={{ marginTop: '3rem' }}
              >
                Skills:
              </Title>
              <Row style={{ marginTop: '0' }}>

                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} descriptionName={'React'} />
                ))}
              </Row>
            </Content>
          </Row>
      </WrapperCont></>
  )
}

export default Resume
