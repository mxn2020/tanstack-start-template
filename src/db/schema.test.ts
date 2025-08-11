import { describe, it, expect } from 'vitest'
import { Board, Column, Item, CreateBoardInput, CreateColumnInput, CreateItemInput } from './schema'

describe('Schema Validation', () => {
  describe('Board Schema', () => {
    it('should validate a valid board', () => {
      const validBoard = {
        id: 'board-1',
        title: 'Test Board',
        columns: []
      }

      const result = Board.safeParse(validBoard)
      expect(result.success).toBe(true)
    })

    it('should reject board with missing title', () => {
      const invalidBoard = {
        id: 'board-1',
        columns: []
      }

      const result = Board.safeParse(invalidBoard)
      expect(result.success).toBe(false)
    })
  })

  describe('Column Schema', () => {
    it('should validate a valid column', () => {
      const validColumn = {
        id: 'column-1',
        title: 'To Do',
        boardId: 'board-1',
        items: []
      }

      const result = Column.safeParse(validColumn)
      expect(result.success).toBe(true)
    })

    it('should reject column with empty title', () => {
      const invalidColumn = {
        id: 'column-1',
        title: '',
        boardId: 'board-1',
        items: []
      }

      const result = Column.safeParse(invalidColumn)
      expect(result.success).toBe(false)
    })
  })

  describe('Item Schema', () => {
    it('should validate a valid item', () => {
      const validItem = {
        id: 'item-1',
        title: 'Test Task',
        columnId: 'column-1',
        order: 0
      }

      const result = Item.safeParse(validItem)
      expect(result.success).toBe(true)
    })
  })

  describe('Create Input Schemas', () => {
    it('should validate CreateBoardInput', () => {
      const input = { title: 'New Board' }
      const result = CreateBoardInput.safeParse(input)
      expect(result.success).toBe(true)
    })

    it('should validate CreateColumnInput', () => {
      const input = { title: 'New Column', boardId: 'board-1' }
      const result = CreateColumnInput.safeParse(input)
      expect(result.success).toBe(true)
    })

    it('should validate CreateItemInput', () => {
      const input = { title: 'New Item', columnId: 'column-1' }
      const result = CreateItemInput.safeParse(input)
      expect(result.success).toBe(true)
    })
  })
})