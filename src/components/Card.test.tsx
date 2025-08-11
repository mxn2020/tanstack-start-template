import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../test/test-utils'
import { Card } from './Card'

// Mock the queries module
vi.mock('../queries', () => ({
  useDeleteCardMutation: () => ({
    mutate: vi.fn(),
  }),
  useUpdateCardMutation: () => ({
    mutate: vi.fn(),
  }),
}))

// Mock the icons module
vi.mock('../icons/icons', () => ({
  Icon: ({ name }: { name: string }) => <div data-testid={`icon-${name}`}>{name}</div>,
}))

describe('Card Component', () => {
  const defaultProps = {
    title: 'Test Card',
    content: 'Test content',
    id: 'card-1',
    columnId: 'column-1',
    boardId: 'board-1',
    order: 1,
    nextOrder: 2,
    previousOrder: 0,
  }

  it('should render card with title and content', () => {
    render(<Card {...defaultProps} />)
    
    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should render card without content', () => {
    render(<Card {...defaultProps} content={null} />)
    
    expect(screen.getByText('Test Card')).toBeInTheDocument()
    // Content area should still exist but be empty
    const contentElement = screen.getByText('Test Card').parentElement?.querySelector('.mt-2')
    expect(contentElement).toBeInTheDocument()
  })

  it('should display order number', () => {
    render(<Card {...defaultProps} />)
    
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should display delete button', () => {
    render(<Card {...defaultProps} />)
    
    const deleteButton = screen.getByRole('button', { name: /delete card/i })
    expect(deleteButton).toBeInTheDocument()
    expect(screen.getByTestId('icon-trash')).toBeInTheDocument()
  })

  it('should be draggable', () => {
    render(<Card {...defaultProps} />)
    
    const draggableElement = screen.getByText('Test Card').parentElement
    expect(draggableElement).toHaveAttribute('draggable', 'true')
  })

  it('should handle drag start event', () => {
    render(<Card {...defaultProps} />)
    
    const draggableElement = screen.getByText('Test Card').parentElement!
    const mockDataTransfer = {
      effectAllowed: '',
      setData: vi.fn(),
    }
    
    const dragStartEvent = new Event('dragstart', { bubbles: true }) as any
    dragStartEvent.dataTransfer = mockDataTransfer
    
    fireEvent(draggableElement, dragStartEvent)
    
    expect(mockDataTransfer.effectAllowed).toBe('move')
    expect(mockDataTransfer.setData).toHaveBeenCalledWith(
      'application/x-card',
      JSON.stringify({ id: 'card-1', title: 'Test Card' })
    )
  })
})