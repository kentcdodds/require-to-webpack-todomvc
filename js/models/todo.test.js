import Todo from './todo'

describe('todo', function() {
  it('should default with an empty title, low priority, and incomplete', function() {
    const newTodo = new Todo()
    expect(newTodo.get('title')).to.equal('')
    expect(newTodo.get('completed')).to.be.false
    expect(newTodo.get('priority')).to.equal(5)
  })

  it('should be able to toggle the complete state', function() {
    const newTodo = new Todo()
    newTodo.save = sinon.spy()
    newTodo.toggle()
    expect(newTodo.save).to.have.been.calledWith({completed: true})
  })

  it('should be able to toggle the complete state', function() {
    const newTodo = new Todo()
    newTodo.save = sinon.spy()
    newTodo.prioritize()
    expect(newTodo.save).to.have.been.calledWith({priority: 0})
  })
})

