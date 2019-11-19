## _gif_

### Attributes

name (string)
emotion_id (integer)
humor type_id (integer)

### Relationships

belongs_to :humor_type
belongs_to :emotion


## _emotion_

### Attributes

name (string)

### Relationships

has_many :gifs
has_many :humor_types through, :gifs

## _humor type_

### Attributes

range (integer)

### Relationships

has_many :gifs
has_many :emotions through, :gifs
