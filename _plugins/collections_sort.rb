# collections_sort.rb
#
# Sort Jekyll collections items based on arbitrary yaml front matter variables.
#
# example usage:
#
# if you want to sort a collection based on a yaml variable of "order":
#
#    {% assign filtered_events = site.my_collection | collection_sort: 'order' %}
#
#
# input - the object array
# property - property within each object to filter by
# nils ('first' | 'last') - nils appear before or after non-nil values
#
# Returns the filtered array of collection items
module Jekyll
    module CollectionSort
        def collection_sort(input, property, nils = "first")
            case
            when nils == "first"
                order = -1
            when nils == "last"
                order = +1
            else
                raise ArgumentError.new("Invalid nils order: " +
                    "'#{nils}' is not a valid nils order. It must be 'first' or 'last'.")
            end
    
            input.sort { |apple, orange|
                apple_property = apple.data[property] #item_property(apple, property)
                orange_property = orange.data[property] #item_property(orange, property)
                                
                if !apple_property.nil? && orange_property.nil?
                    - order
                elsif apple_property.nil? && !orange_property.nil?
                    + order
                else
                    apple_property <=> orange_property
                end
            }
        end
    end
end

Liquid::Template.register_filter(Jekyll::CollectionSort)
