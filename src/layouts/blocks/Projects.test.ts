import { render, screen, fireEvent } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Projects from './Projects.svelte'

describe('Projects', () => {
  it('초기에는 프로젝트 3개만 렌더링한다', () => {
    render(Projects)

    const projectHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(projectHeadings).toHaveLength(3)
    expect(screen.getByRole('button', { name: '더보기' })).toBeInTheDocument()
  })

  it('더보기 클릭 시 3개씩 추가 렌더링하고, 모두 노출되면 버튼이 사라진다', async () => {
    render(Projects)

    await fireEvent.click(screen.getByRole('button', { name: '더보기' }))

    const projectHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(projectHeadings).toHaveLength(6)
    expect(screen.queryByRole('button', { name: '더보기' })).not.toBeInTheDocument()
  })
})

