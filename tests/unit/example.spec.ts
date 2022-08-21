import { shallowMount } from '@vue/test-utils'
import card from '@/components/card.vue'

describe('card.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(card, {
      props: { msg }
    })
    expect(() => {
      console.log(wrapper.text())
      return wrapper.text()
    }).toMatch(msg)
  })
})
