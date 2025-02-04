"use client"

import { STEPS } from "../../../lib/createStep"
import { useCreate } from "../../../providers/CreateProvider"
import AnimatedBook from "../../AnimatedBook"
import Layout from "../../Layout"
import { STATUS } from "../../../lib/bookStatus"
import CharacterSelect from "./CharacterSelect"
import { useAnimatedBook } from "../../../providers/AnimatedBookProvider"
import AttributeSelect from "./AttributeSelect"
import Success from "./Success"
import SuccessMultiple from "./SuccessMultiple"
import PfpRenderer from "./PfpRenderer"

const CreatePage = () => {
  const { currentStep } = useCreate() as any
  const { currentStatus } = useAnimatedBook() as any

  return (
    <>
      <Layout type="base">
        <AnimatedBook>
          {currentStatus === STATUS.OPENED && (
            <>
              {currentStep === STEPS.CHOOSE_CHARACTER_TYPE && <CharacterSelect />}
              {currentStep === STEPS.SELECT_CHARACTER && <AttributeSelect />}
              {currentStep === STEPS.SUCCESS && <Success />}
              {currentStep === STEPS.SUCCESS_MULTIPLE && <SuccessMultiple />}
            </>
          )}
        </AnimatedBook>
      </Layout>
      <PfpRenderer />
    </>
  )
}

export default CreatePage
