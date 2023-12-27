/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */

import { Button } from '../button'
import Description from './description'
import FirstWarning from './first-warning'
import YoutubeLink from './link'
import SecondWarning from './second-warning'
import styles from './styles.module.css'
import Title from './title'

const {
  s_headline, 
  contaner_area, 
  content_area, 
  apa_details, 
  buttons, 
  boxLight,
  light
 } = styles

const Heading = () =>{

    return(
      <section className={s_headline}>
        <div className={contaner_area}>
          <div className={boxLight}>
            <img src="/light.png" alt="light" className={light}/>
          </div>
          <div className={content_area}>
            <Title content='APA Conference'/>
           <Description content='Prepare-se para mergulhar em debates, workshops e descobertas que impulsionarão a inovação e o progresso na comunidade de programação de Angola. Junte-se a nós nessa jornada de aprendizado e colaboração'/>
          </div>
            
         <div className={apa_details}>
          <div className={buttons}>
            <FirstWarning />
            <div>
              <Button 
                type='button' 
                content='Obter ingresso agora' 
                onClick={()=> { 
                  alert("Funciona")
                }}
              />
            </div>
            <SecondWarning />
          </div>
          
          <YoutubeLink />
         </div>
        </div>
      </section>
    )
}
export default Heading