import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains navigation links', () => {
    const wrapper = mount(NavBar)
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })
})