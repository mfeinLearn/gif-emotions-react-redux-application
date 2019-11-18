## _gif_

### Attributes
name (string)

### Relationships

belongs_to :humor_types
belongs_to :emotion


## _emotion_

### Attributes

name (string)
gif_id (integer)

### Relationships

has_many :gifs
has_many :humor_types through, :gifs


## _humor type_

### Attributes

range (integer)
gif_id (integer)

### Relationships

has_many :gifs
has_many :emotions through, :gifs
