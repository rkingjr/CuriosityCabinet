function annotation() {
    return {
      newComment: '',
      notes: [
        // {
        //   id: Date.now(),
        //   x: 260,
        //   y: 22,
        //   visible: true,
        //   comments: [
        //     { text: 'Change color, please!' },
        //     { text: 'Done =)' },
        //   ]
        // }
      ],
      image: {
         ['@click'](event) {
           const img = event.target.getBoundingClientRect()
          //  console.log(event);
          //  console.log(img);
           this.addNote(event.pageX - img.left, event.pageY - img.top)
         }
      },
      addNote(x, y) {
        const hasVisibleNote = this.notes.find(n => n.visible === true)
        
        this.toggleNote()
        
        if (hasVisibleNote) return
        
        this.notes.push({
          id: Date.now(),
          x,
          y,
          visible: true,
          comments: []
        })
      },
      addComment(note) {
        if (!this.newComment.trim()) return
        
        this.notes = this.notes
          .filter(n => n.id !== note.id)
          .concat({
            ...note,
            comments: note.comments.concat({ text: this.newComment }),
          })
    
        this.newComment = ''
      },
      toggleNote(note) {
        this.notes = this.notes
          .map(n => ({ ...n, visible: note && n.id === note.id ? true : false }))
      },
      markerStyle(note) {
        return `top:${note.y - 13}px;left:${note.x - 13}px;`
      },
    }
  }
  let clearBtn = document.getElementById("clearBtn")
  clearBtn.addEventListener('click', event => {
    clearAnnotations();
  });
 function clearAnnotations() {
  location.reload();
};